import React, { Component } from 'react'
import App from './App'
import { Provider } from 'react-redux';
import createStore from './createStore'

const store = createStore();

const AppRootContainer  = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppRootContainer
