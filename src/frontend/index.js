import React from 'react';
import {hydrate} from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';


if (typeof window !== 'undefined'){
  
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer,preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // Cambiar al subir a production
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