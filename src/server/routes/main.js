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

            let userData = await axios({
                url: `${process.env.API_URL}/api/users`,
                headers: { Authorization: `Bearer ${token}` },
                method: 'get',
              });

            userData = userData.data.data;
            courseList = courseList.data.data;

            initialState = {
                user,
                data: userData.filter(user => user._id === id),
                myClass:courseList.filter(course => course.user_id === id ),
                class:courseList.filter(course => course.dates)
            }
        }catch(error){
            initialState = {
                user:{},
                myClass:[],
                data: {},
                class:{}
            }
            console.log(error)
        }

        const state = (initialState.data);
        const store = createStore(reducer,initialState);
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {renderRoutes(Routes(state))}
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

