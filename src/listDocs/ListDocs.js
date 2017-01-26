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

const list1 = ['Loading']

class ListDocs extends Component {

  log(itemName) {
    this.selectItem(itemName)
    this.changeTab('detailsdocs')
    console.log('this is an example method')
  }

  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(list1)
    }
    this.changeTab = props.changeTab
    this.selectItem = props.selectItem
    this.renderRow = this.renderRow.bind(this)
    this.log = this.log.bind(this)
  }
  renderRow (rowData) {
    var navigator = this.props.navigator
    return (
      <ListItem
        onPress={() => this.log(rowData)}
        title={rowData}
      />
    )
  }

  componentWillMount(){
    API.getDocsList()
    .then((response) => {
      console.log(response)
      this.setState({
        dataSource: this.ds.cloneWithRows(response)
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }
  render () {
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
            />
        </List>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
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

export default ListDocs
