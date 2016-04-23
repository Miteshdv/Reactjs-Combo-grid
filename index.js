import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import { createStore } from 'redux'
import configureStore from './store/configureStore.js'
import GridDataReducer from './reducers/GridDataReducer'


const store =configureStore()

ReactDOM.render( 
    <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
