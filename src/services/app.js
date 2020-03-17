import axios from 'axios'
const API_ROOT = 'https://api.twitter.com/'
const REQUEST_TOKEN = API_ROOT + 'oauth2/token'
const GET_TWEETS = API_ROOT + 'tweets'
import { CONSUMER_API_KEY, CONSUMER_API_SECRET_KEY } from '../common/constants'

const requestToken = () => {
  const encodedString = new Buffer(
    `${CONSUMER_API_KEY}:${CONSUMER_API_SECRET_KEY}`
  ).toString('base64')
  const axiosInstance = axios.create({
    timeout: 10000,
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Basic ${encodedString}`
    }
  })

  return axiosInstance.post(REQUEST_TOKEN, {
    grant_type: 'client_credentials'
  })
}

const getTweets = (screenName, accessToken) => {
  const axiosInstance = axios.create({
    timeout: 10000,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`
    }
  })
  return axiosInstance.get(`${GET_TWEETS}/?count=10&screen_name=${screenName}`)
}

export const appApi = {
  requestToken,
  getTweets
}
