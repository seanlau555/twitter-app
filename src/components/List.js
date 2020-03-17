import React from 'react'
import { Card } from './Card'

class List extends React.PureComponent {
  render() {
    const { tweets } = this.props
    return (
      <div>
        {tweets.map((tweet, i) => (
          <Card key={i} tweet={tweet} />
        ))}
      </div>
    )
  }
}

export default List
