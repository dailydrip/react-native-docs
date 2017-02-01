import React, { Component } from 'react'
import App from './App'
import { connect } from 'react-redux'
import { Actions } from './actions'
import { TabNavigator } from 'react-navigation';


const AppRootContainer  = () => {
  return (
    <App />
  )
}

export default connect(
  () => { return {} },
  dispatch => {
    return {
      fetchDocsList: () => {
        dispatch(Actions.fetchDocsList())
      },
      fetchDocsContent: (item) => {
        dispatch(Actions.fetchDocsContent(item))
      },
    }
  }
)(App)
