/* ============================== */
/* File: index.jsx */
/* Author: Luiz Moura */
/* Email: luizmoura2@hotmail.com */
/* © Copyright 01/09/2020 09:32 */
/* ============================== */
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware,  createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import reducers from './main/reducers'
import App from './main/app.jsx'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
              && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware( promise )( createStore )( reducers, devTools )
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')   
)