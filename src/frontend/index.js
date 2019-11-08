import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './initialState';
import reducer from './reducers';


import App from './routes/App';


const store = createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = createBrowserHistory();

ReactDOM.render(
       
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    
    document.getElementById('app')
);