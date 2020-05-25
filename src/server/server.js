import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import axios from 'axios';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import main from './routes/main';

const { config } = require("./config");

dotenv.config();

const ENV = process.env.NODE_ENV;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

// Basic strategy
require('./utils/auth/strategies/basic');
//OAuth strategy
require('./utils/auth/strategies/oauth');

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', async (error, data) => {
    try {
      if (error || !data) {
        return next(boom.unauthorized());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
        });
        res.status(200).json(user.user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async (req, res, next) => {
  const { body: user } = req;
  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: user,
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.data,
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/email', async (req, res, next) => {

  const info = {
    name: req.body.name,
    email: req.body.email,
    case: req.body.case,
    message: req.body.message
  }

  try {
    const {data} = await axios({
      url: `${process.env.API_URL}/api/email`,
      method: 'post',
      data:info
    });

  res.status(201).json({data});

  } catch (error) {
    next(error);
  }
});

app.post('/api/email/confirm', async (req, res, next) => {

  // console.log('req.body',req.body)
  const info = {
    name: req.body.name,
    email: req.body.email,
    case: req.body.case,
    message: req.body.message,
    id: req.body.id,
  }
  
  try {
    const {data} = await axios({
      url: `${process.env.API_URL}/api/email/confirm`,
      method: 'post',
      data: info
    });
    
    res.status(201).json({data});

  } catch (error) {
    next(error);
  }
});

app.get("/auth/google-oauth", passport.authenticate("google-oauth",{
  scope:['email','profile','openid']
}))

app.get(
  "/auth/google-oauth/callback",
  passport.authenticate("google-oauth",
  { session: false ,
  failureRedirect: '/login'}),
  function(req, res, next) {
    if (!req.user) {
      next(boom.unauthorized());
    }
  
    const { token, ...user } = req.user;
    
    if (req.isAuthenticated()) {

      res.cookie("token", token, {
        httpOnly: !config.dev,
        secure: !config.dev,
      });
      
      
      res.cookie("email",user.user.email,{
        httpOnly: !config.dev,
        secure: !config.dev,
      });
      
      res.cookie("name",user.user.name,{
        httpOnly: !config.dev,
        secure: !config.dev,
      });

      res.cookie("id",user.user.id,{
        httpOnly: !config.dev,
        secure: !config.dev,
      });
      
      res.status(200).json(user,{
        httpOnly: !config.dev,
        secure: !config.dev,
      });
      
      res.redirect('/')
    }

  }
);

app.post('/auth/courses', async (req, res, next) => {

  const course = {
    schedule: req.body.schedule,
    coach: req.body.coach,
    type: req.body.type,
    premium: req.body.premium,
    price: req.body.price,
    user_id: req.body.user_id,
    dates: req.body.dates,
    classes: req.body.classes,
    status: req.body.status
  }

  const token = req.cookies.token

  try {
    const {data} = await axios({
      url: `${process.env.API_URL}/api/courses`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data:course
    });

  res.status(201).json({data});

  } catch (error) {
    next(error);
  }
});

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
});
