import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'

// import {inc, dec, counterReducer} from './store/counter'
import counterReducer, { inc, dec, } from './store/counter'
import todosReducer, { addTodo, toggle, del } from './store/todos'

import './index.css';
import App from './App';


//Store
const store = createStore(
    combineReducers({
        counter: counterReducer,
        todos: todosReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.addTodo = (newText) => store.dispatch(addTodo(newText))
window.toggle = (id) => store.dispatch(toggle(id))
window.del = (id) => store.dispatch(del(id))


window.addTodo('my initial todo')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));