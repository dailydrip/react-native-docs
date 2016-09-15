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
    backgroundColor: '#F5FCFF',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.main}>
            React Native Documentation
          </Text>
          <ListDocs navigator={this.props.navigator} />
        </View>
      </View>
    );
  }
}