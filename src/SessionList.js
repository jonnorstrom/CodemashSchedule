import React, { Component } from 'react';
import Session from './Session'

class SessionList extends Component {
  render() {
    const { sessions } = this.props
    console.log(sessions)
    return (
      <div>
        { sessions.map(session => <Session key={session.Id} { ...session }/>) }
      </div>
    )
  }
}

export default SessionList
