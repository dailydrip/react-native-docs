import { AsyncStorage, Network } from 'react-native'
import Base64 from '../util/Base64'

const BASE_URL = 'https://api.github.com/repos/facebook/react-native/contents/docs'

const docsContentUrl = (name) => `${BASE_URL}/${name}.md`

export default {
  getDocsList: function getTopics() {
    return fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      var names = [];

      json.forEach(function(element) {
        names.push(element.name.replace(".md", ""))
      }, this);

      return names;
    })
  },
  getDocsContent: function getDrips(name) {
    return fetch(docsContentUrl(name))
    .then((response) => response.json())
    .then((json) => {
      return Base64.decode(json.content)
    })
  },
}
