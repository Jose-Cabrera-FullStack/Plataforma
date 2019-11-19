import React from 'react';
import {hydrate} from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';


if (typeof window !== 'undefined'){
  let composeEnhacers;
  if(NODE_ENV =='production') reduxTools= compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer,preloadedState, composeEnhacers(applyMiddleware(thunk))); // Cambiar al subir a production
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