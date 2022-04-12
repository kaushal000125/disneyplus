import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';
import App from './App';
import "./App.css";
import { Store } from './Redux/Store/Store';
//import { Store } from './Redux/Store/Store.js';
import { Provider } from 'react-redux';
ReactDOM.render(
    <>
        <Provider store={Store}>
            <App/>
        </Provider>
    </>,document.getElementById('root')
);