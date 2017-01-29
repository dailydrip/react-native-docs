import Immutable from 'immutable'
import {
  Actions,
  FETCH_DOCS_LIST,
  GOT_DOCS_LIST,
} from '../../actions'
import { loop, Effects } from 'redux-loop'
import API from '../../api'

let fetchDocsList = () => (
  API.getDocsList()
    .then((response) => {
      return Actions.gotDocsList(response)
    })
    .catch((err) => {
      console.error(err)
      return Actions.noOp()
    })
)

// let fetchDocsContent = (itemName) => (
//   API.getDocsContent(itemName)
//     .then((response) => {
//       return Actions.gotDocsList()
//     })
//     .catch((err) => {
//       console.error(err)
//       return Actions.noOp()
//     })
// )

export default function reducer(state, action) {
  switch(action.type) {
    case FETCH_DOCS_LIST:
      return loop(
        state,
        Effects.promise(fetchDocsList)
      )
    case GOT_DOCS_LIST:
      return loop(
        state.set('docsList', action.content),
        Effects.none()
      )
    default:
      return state
  }
}
