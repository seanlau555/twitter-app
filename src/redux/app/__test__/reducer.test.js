import { appReducer, INITIAL_STATE } from '../reducer'
import { appActionCreators } from '../actions'

test('app state should merge with get tweets response', () => {
  const state = appReducer(INITIAL_STATE, {})
  const params = {}

  const nextState = appReducer(state, appActionCreators.getTweetsSuccess(params))
  expect(nextState).toEqual({
    ...state,
    tweets: params,
  })
})

test('app state should merge with app init response', () => {
  const state = appReducer(INITIAL_STATE, {})
  const accessToken = ''

  const nextState = appReducer(state, appActionCreators.appInitSuccess(accessToken))
  expect(nextState).toEqual({
    ...state,
    accessToken
  })
})
