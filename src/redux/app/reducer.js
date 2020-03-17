import { handleActions } from 'redux-actions'
import {
  REQUEST_FAILURE,
  GET_TWEETS_SUCCESS,
  APP_INIT_SUCCESS
} from './actions'

export const INITIAL_STATE = {
  accessToken: '',
  tweets: [],
  errorMessage: ''
}

const appInitSuccess = (state, { payload }) => {
  return {
    ...state,
    accessToken: payload.accessToken
  }
}

const getTweetsSuccess = (state, { payload }) => {
  return {
    ...state,
    tweets: payload.tweets
  }
}

const requestFailure = (state, { payload }) => {
  return {
    ...state,
    errorMessage: payload.message
  }
}

export const appReducer = handleActions(
  {
    [APP_INIT_SUCCESS]: appInitSuccess,
    [GET_TWEETS_SUCCESS]: getTweetsSuccess,

    [REQUEST_FAILURE]: requestFailure
  },
  INITIAL_STATE
)
