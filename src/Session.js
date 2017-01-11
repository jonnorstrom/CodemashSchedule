import React, { Component } from 'react';

class Session extends Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.abstract}</p>
      </div>
    )
  }
}

export default Session
