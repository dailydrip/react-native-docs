import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../header'

import {
  List,
  ListItem,
  Text,
  SearchBar
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

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
})

export default DetailsDocs
