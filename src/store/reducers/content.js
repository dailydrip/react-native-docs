import Immutable from 'immutable'
import {
  Actions,
  UPDATE_USER_INFORMATION,
  FETCH_USER_INFORMATION,
  GOT_USER_INFORMATION,
  SET_USER_NAME,
  SET_USER_EMAIL,
} from '../../actions'
import { loop, Effects } from 'redux-loop';
import API from '../../api'
