import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../header'

import {
  Text,
} from 'react-native-elements'

const DetailsDocs = (props) => {
  return (
    <View>
      <Header />
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        <Text> { props.docsContent } </Text>
      </ScrollView>
    </View>
  )
}

DetailsDocs.navigationOptions = {
  title: '',
  tabBar: {
    icon: () =>(
      null
    )}
};

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
})

export default DetailsDocs
