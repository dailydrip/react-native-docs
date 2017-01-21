import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Main from './components/Main'
import DetailsDocs from './components/DetailsDocs/DetailsDocs'

function navigatorRenderScene(route, navigator) {
  switch (route.index) {
    case 'first':
      return (<Main navigator={navigator} title="Main Screen" />);
    case 'details':
      return (<DetailsDocs data={route.data} navigator={navigator} title="Details Docs" />);
  }
}

const reactNativeDocs = () => {
  return (<Navigator
        initialRoute={{ index: 'first' }}
        renderScene={navigatorRenderScene}
      />);
}

AppRegistry.registerComponent('reactNativeDocs', () => reactNativeDocs);
