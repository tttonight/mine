import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducer';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// store
function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware, loggerMiddleware))
} 
