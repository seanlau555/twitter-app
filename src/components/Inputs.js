import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'
import * as R from 'ramda'

class Inputs extends React.PureComponent {
  state = {
    input: ''
  }

  onInputChange = evt => {
    this.setState({ input: evt.target.value })
  }

  onSubmit = () => {
    const { GetTweets } = this.props
    const { input } = this.state
    GetTweets(input)
  }

  render() {
    const { input } = this.state
    return (
      <StyledInputs>
        <div className="header-title">Search</div>
        <StyledInput value={input} onChange={this.onInputChange} allowClear />
        <ButtonWrapper>
          <Button
            type="primary"
            onClick={this.onSubmit}
            disabled={R.isEmpty(input)}
          >
            Submit
          </Button>
        </ButtonWrapper>
      </StyledInputs>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  button {
    margin-right: 16px;
  }
`

const StyledInputs = styled.div`
  padding: 16px 24px;
  .header-title {
    margin-top: 32px;
    font-size: 16px;
  }
`

const StyledInput = styled(Input)`
  width: 100%;
`

export default Inputs
