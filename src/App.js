import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SessionList from './SessionList'
const URL = "./session.json"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessions: []
    }

    fetch(URL)
      .then(r => r.json())
      .then((sessions) => {
        this.setState({
          sessions: sessions
        })
      })
  }

  render() {
    const { sessions } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to CodeMash</h2>
        </div>

        <SessionList sessions={sessions} />


      </div>
    );
  }
}



export default App;
