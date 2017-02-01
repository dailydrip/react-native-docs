import React, { Component } from 'react'
import App from './App'
import { connect } from 'react-redux'
import { Actions } from './actions'


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
