import React from 'react'
import { AppRegistry } from 'react-native'
import AppRootContainer from './src/AppRootContainer'
import { Provider } from 'react-redux';
import store from './src/store'

const HackathonStarter  = () => {
  return (
    <Provider store={store}>
      <AppRootContainer />
    </Provider>
  )
}

AppRegistry.registerComponent('HackathonStarter', () => HackathonStarter)
