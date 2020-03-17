import { all, takeLatest } from 'redux-saga/effects'

import { getTweets } from './getTweets'
import { appInit } from './appInit'
import { APP_INIT, GET_TWEETS } from '../actions'

export function* appSaga() {
  yield all([
    takeLatest(APP_INIT, appInit),
    takeLatest(GET_TWEETS, getTweets),
  ])
}
