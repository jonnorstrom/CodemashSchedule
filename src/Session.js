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
  constructor(props) {
    super(props)
    this.state = ({
      showDetails: false,
      showHide: "Show"
    })
  }

  toggleState(e) {
    e.preventDefault()
    this.setState({
      showDetails: !this.state.showDetails,
      showHide: this.state.showHide === "Show" ? "Hide" : "Show"
    })
  }
  
  render() {
    const {title, abstract} = this.props
    return (
      <div>
        <p>{title}</p>
        <a href="" onClick={this.toggleState.bind(this)}>{this.state.showHide} Details</a>
        { this.state.showDetails && <p>{abstract}</p> }

        <Speaker {...this.props.speakers[0]}/>
      </div>
    )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
  speakers: React.PropTypes.array.isRequired
}

export default Session
