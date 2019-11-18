import React from 'react';
import {hydrate} from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';


if (typeof window !== 'undefined'){
  let reduxTools;
  if(NODE_ENV =='production') reduxTools= '';
  else reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer,preloadedState, reduxTools, applyMiddleware(thunk)); // Cambiar al subir a production
  const history = createBrowserHistory();
  
  hydrate(
    
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    
    document.getElementById('app')
    );
  }