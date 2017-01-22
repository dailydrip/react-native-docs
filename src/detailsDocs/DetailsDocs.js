import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  List,
  ListItem,
  Text,
  SearchBar
} from 'react-native-elements'

import API from '../api'

class DetailsDocs extends Component {
  constructor (props) {
    super()
    this.getItem = props.getItem()
    this.state = {
      content: 'Loading...'
    }

    API.getDocsContent(this.getItem)
    .then((response) => {
      console.log(response)
      this.setState({
        content: response
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   API.getDocsContent(this.getItem)
  //   .then((response) => {
  //     console.log(response)
  //     this.setState({
  //       content: response
  //     })
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
  // }

  render () {
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        <Text> { this.state.content } </Text>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    backgroundColor: '#ebedf1'
  },
  container: {
    marginTop: 60
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#69DDFF'
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

export default DetailsDocs
