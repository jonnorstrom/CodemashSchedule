import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SessionList from './SessionList'

const session = {
  id: 1,
  title: "React Everywhere",
  abstract: "peace out",
  speakers: [{
    firstName: "Len"
  }]
}

const session2 = {
  id: 2,
  title: "React Everywhere",
  abstract: "peace out",
  speakers: [{
    firstName: "Len"
  }]
}

const sessions = [session, session2]

class App extends Component {
  render() {
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
