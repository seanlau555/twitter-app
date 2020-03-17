import { call, put } from 'redux-saga/effects'

import { appApi } from '../../../services/app'
import { appActionCreators } from '../actions'
import { accessToken } from '../../../common/constants'

export function* appInit() {
  try {
    // 1. enable following two line of code
    // const { data } = yield call(appApi.requestToken)
    // yield put(appActionCreators.appInitSuccess(data.access_token))

    // 2. comment this
    yield put(appActionCreators.appInitSuccess(accessToken))
  } catch (e) {
    yield put(
      appActionCreators.requestFailure({
        message: 'Internal server error 500'
      })
    )
  }
}
