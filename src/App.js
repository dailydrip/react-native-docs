import React, { Component } from 'react'
import { StyleSheet, Platform, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import About from './about/AboutRootContainer'
import ListDocs from './listDocs/ListDocsRootContainer'
import DetailsDocs from './detailsDocs/DetailsDocsRootContainer'

import { Tabs, Tab } from 'react-native-elements'
import { TabNavigator } from 'react-navigation';

import API from './api'

class App extends Component {
  constructor (props) {
    super()
    props.fetchDocsList()
  }

  render () {
    return (
      null
    )
  }
}

const SimpleApp = TabNavigator({
  List: { screen: ListDocs },
  Details: { screen: DetailsDocs },
});

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default SimpleApp
