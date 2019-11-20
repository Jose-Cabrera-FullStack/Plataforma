import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StaticRouter} from 'react-router';
import {renderRoutes} from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
// import Footer from '../../frontend/components/Footer';
import reducer from '../../frontend/reducers';
import render from '../render';

const main = (req,res, next) => {
    try{
        let initialState;
        try{
            const {email,name,id} = req.cookies;
            let user = {};

            if (email || name || id) {
                user = {
                    id,
                    email,
                    name
                };
            }

            initialState = {
                user,
                feature: {}
            }
        }catch(error){
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

