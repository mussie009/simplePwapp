// import 'materialize-css/dist/css/materialize.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
 import reduxThunk from 'redux-thunk';
 import reduxPromise from 'redux-promise';
 import registerServiceWorker from './registerServiceWorker';


import App from './components/App';

const store =  createStore(reducers, {}, applyMiddleware(reduxThunk, reduxPromise));



ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
registerServiceWorker();
