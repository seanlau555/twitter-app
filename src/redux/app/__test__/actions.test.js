import { APP_INIT, GET_TWEETS, appActionCreators } from '../actions'

test('init App action', () => {
  const params = { accessToken: '' }
  const action = appActionCreators.appInit(params)
  expect(action).toEqual({
    type: APP_INIT,
    payload: {
      accessToken: ''
    }
  })
})

test('get tweets action', () => {
  const params = { tweets: [] }
  const action = appActionCreators.getTweets(params)
  expect(action).toEqual({
    type: GET_TWEETS,
    payload: {
      tweets: []
    }
  })
})
