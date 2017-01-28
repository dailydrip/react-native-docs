import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'

import * as Loop from 'redux-loop'

const initialState = Immutable.fromJS({
  item: {},
  contentItem: {}
})

const enhancer = compose(
  Loop.install(),
)

const store = createStore(
  Loop.combineReducers(
    reducers,
    Immutable.Map(),
    (state, key) => state.get(key),
    (state, key, value) => state.set(key, value)
  ),
  initialState,
  enhancer
)
