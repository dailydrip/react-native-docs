import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  WebView,
  ScrollView,
  View
} from 'react-native';
import API from '../../api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class DetailsDocs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  componentWillMount(){
    API.getDocsContent(this.props.data)
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

  render() {
    var content = this.state.content;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{this.state.content }</Text>
        </ScrollView>
      </View>
    );
  }
}
