import React, { Component } from 'react';
import API from '../../api'
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textComponent: {
    fontSize: 24,
  }
});

export default class ListDocs extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([
        'Loading...'
      ])
    };

    this.onClickList = this.onClickList.bind(this);
  }

  onClickList(rowData){
    this.props.navigator.push({
      index: 'details',
      data: rowData
    })
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight underlayColor='white' onPress={this.onClickList.bind(this, rowData)}>
              <View>
                <Text style={styles.textComponent}>{rowData}</Text>
              </View>
              </TouchableHighlight>
            }
          />
        </View>
      </View>
    );
  }
}