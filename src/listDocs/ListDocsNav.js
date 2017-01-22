import React, { Component } from 'react'
import { Navigator } from 'react-native'
import ListDocs from './ListDocs'
import navigationBar from 'HSNavBar'

const initialRoute = {component: ListDocs}

class ListDocsNav extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    return (
      <route.component selectItem={this.props.selectItem} changeTab={this.props.changeTab} navigator={navigator} {...route.passProps} />
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

export default ListDocsNav
