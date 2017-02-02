import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import About from './about/AboutRootContainer'
import ListDocs from './listDocs/ListDocsRootContainer'
import DetailsDocs from './detailsDocs/DetailsDocsRootContainer'

import { TabNavigator } from 'react-navigation';

const App = TabNavigator({
  List: { screen: ListDocs },
  Details: { screen: DetailsDocs },
  About: { screen: About },
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

export default App
