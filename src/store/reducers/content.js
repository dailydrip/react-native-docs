import Immutable from 'immutable'
import {
  Actions,
  FETCH_DOCS_LIST,
  FETCH_DOCS_CONTENT,
  GOT_DOCS_LIST,
  GOT_DOCS_CONTENT,
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

let fetchDocsContent = (itemName) => (
  API.getDocsContent(itemName)
    .then((response) => {
      return Actions.gotDocsContent(response)
    })
    .catch((err) => {
      console.error(err)
      return Actions.noOp()
    })
)

export default function reducer(state, action) {
  switch(action.type) {
    case FETCH_DOCS_LIST:
      return loop(
        state,
        Effects.promise(fetchDocsList)
      )
    case FETCH_DOCS_CONTENT:
      return loop(
        state,
        Effects.promise(fetchDocsContent, action.item)
      )
    case GOT_DOCS_LIST:
      return loop(
        state.set('docsList', action.content),
        Effects.none()
      )
    case GOT_DOCS_CONTENT:
      return loop(
        state.set('docsContent', action.content),
        Effects.none()
      )
    default:
      return loop(
        state,
        Effects.none()
      )
  }
}
