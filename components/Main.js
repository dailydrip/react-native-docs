import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListDocs from './ListDocs/ListDocs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const Main = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.main}>
          React Native Documentation
        </Text>
        <ListDocs navigator={props.navigator} />
      </View>
    </View>
  );
}

export default Main;
