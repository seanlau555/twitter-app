import React from 'react'
import styled from 'styled-components'
import { timeDifference } from '../common/constants'

export function Card({ tweet }) {
  return (
    <StyledWrapper>
      <TweetInfo>
        <Profile>
          <img alt={tweet.id} src={tweet.user.profile_image_url} />
          <div>{tweet.user.screen_name}</div>
        </Profile>

        <div>{timeDifference(tweet.created_at)}</div>
      </TweetInfo>

      <div>{tweet.text}</div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
`
const Profile = styled.div`
  display: flex;
`
const TweetInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
