import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    return (
      <div>
        {this.props.firstName}
      </div>
    )
  }
}
class Session extends Component {
  render() {
    const {title, abstract} = this.props
    return (
      <div>
        <p>{title}</p>
        <p>{abstract}</p>

        <Speaker {...this.props.speakers[0]}/>
      </div>
    )
  }
}

export default Session
