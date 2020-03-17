import { createAction } from 'redux-actions'

export const APP_INIT = 'app/APP_INIT'
export const APP_INIT_SUCCESS = 'app/APP_INIT_SUCCESS'
export const GET_TWEETS = 'app/GET_TWEETS'
export const GET_TWEETS_SUCCESS = 'app/GET_TWEETS_SUCCESS'
export const REQUEST_FAILURE = 'app/REQUEST_FAILURE'

export const appActionCreators = {
  appInit: createAction(APP_INIT),
  appInitSuccess: createAction(APP_INIT_SUCCESS, accessToken => ({
    accessToken
  })),
  getTweets: createAction(GET_TWEETS, screenName => screenName),
  getTweetsSuccess: createAction(GET_TWEETS_SUCCESS, tweets => ({ tweets })),
  requestFailure: createAction(REQUEST_FAILURE, err => err)
}
