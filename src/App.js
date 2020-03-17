import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import './App.css'
import { appActionCreators } from './redux'
import Inputs from './components/Inputs'
import List from './components/List'

class App extends React.PureComponent {
  componentDidMount() {
    const { AppInit } = this.props
    AppInit()
  }
  render() {
    const { GetTweets, tweets, errorMessage } = this.props
    return (
      <div className="App">
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Inputs errorMessage={errorMessage} GetTweets={GetTweets} />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 16 }}>
            <List tweets={tweets} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  tweets: app.tweets,
  errorMessage: app.errorMessage
})

const mapDispatchToProps = {
  AppInit: appActionCreators.appInit,
  GetTweets: appActionCreators.getTweets
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
