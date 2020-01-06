import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StaticRouter} from 'react-router';
import {renderRoutes} from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/serverRoutes';
import reducer from '../../frontend/reducers';
import render from '../render';

require('dotenv').config();

const main = async (req,res, next) => {
    try{
        let initialState;
        try{
            const {token,email,name,id} = req.cookies;
            let user = {};
            if (email || name || id) {
                user = {
                    id,
                    email,
                    name
                };
            }

            let courseList = await axios({
                url: `${process.env.API_URL}/api/courses`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
              });

            courseList = courseList.data.data;

            initialState = {
                user,
                type: courseList.filter(course => course.type === 'Profesional Player'),
                myList: courseList.filter(course => course._id === id),
            }
        }catch(error){
            initialState = {
                user:{},
                type: {},
                myList: [],
            }
            console.log(error)
        }
        const store = createStore(reducer,initialState);
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>
        )
        const preloadedState = store.getState();
        res.send(render(html,preloadedState))
    }catch(err){
        next(err)
    }
}

export default main;

