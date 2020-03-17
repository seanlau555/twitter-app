import { call, select, put } from 'redux-saga/effects'

import { appApi } from '../../../services/app'
import { appActionCreators } from '../actions'
import { accessTokenSelector } from '../selectors'

import { dataList } from '../../../common/constants'

export function* getTweets({ payload }) {
  try {
    // 1. enable following three line of code
    // const accessToken = yield select(accessTokenSelector)
    // const { data } = yield call(appApi.getTweets, payload, accessToken)
    // yield put(appActionCreators.getTweetsSuccess(data))

    // 2. comment this
    yield put(appActionCreators.getTweetsSuccess(dataList))
  } catch (e) {
    console.log(e)
    yield put(
      appActionCreators.requestFailure({
        message: 'Internal server error 500'
      })
    )
  }
}
