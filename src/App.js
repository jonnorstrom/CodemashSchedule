import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SessionList from './SessionList'
const URL = "./session.json"

class Loading extends Component {
  render(){
    if (this.props.loading) return <h1>Loading</h1>
    return <div>{this.props.children}</div>
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessions: [],
      loading: true
    }

    fetch(URL)
      .then(r => r.json())
      .then((sessions) => {
        this.setState({
          sessions: sessions,
          loading: false
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

        <Loading loading={this.state.loading}>
          <SessionList sessions={sessions} />
        </Loading>
      </div>
    );
  }
}



export default App;
