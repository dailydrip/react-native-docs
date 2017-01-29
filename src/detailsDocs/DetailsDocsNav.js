import React, { Component } from 'react'
import { Navigator } from 'react-native'
import DetailsDocs from './DetailsDocs'
import navigationBar from 'HSNavBar'

const initialRoute = {component: DetailsDocs}

class DetailsDocsNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    return (
      <route.component docsContent={this.props.docsContent} navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    return (
      <Navigator
        navigationBar={navigationBar()}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default DetailsDocsNav
