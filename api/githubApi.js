import { Network } from 'react-native'

let api = {
  getDocs: function getMovies() {
    return fetch('https://api.github.com/repos/facebook/react-native/contents/docs')
    .then((response) => response.json())
    .then((response) => {
        return response;
      });
  }
}

export default api