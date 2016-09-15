import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './components/Main'

const reactNativeDocs = () => {
  return (<Main />);
}

AppRegistry.registerComponent('reactNativeDocs', () => reactNativeDocs);
