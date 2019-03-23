import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import {inc, dec, counterReducer} from './store/counter'

import './index.css';
import App from './App';


//Store
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())

window.dec = () => store.dispatch(dec())



ReactDOM.render(<App />, document.getElementById('root'));