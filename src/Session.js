import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    return (
      <div>
        {this.props.FirstName}
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
    const {Title, Abstract, Speakers} = this.props
    return (
      <div className="session-info">
        <p>{Title}</p>
        <p><Speaker {...Speakers[0]}/></p>
        <a href="" onClick={this.toggleState.bind(this)}>{this.state.showHide} Details</a>
        { this.state.showDetails && <p>{Abstract}</p> }
      </div>
    )
  }
}

// Session.propTypes = {
//   Title: React.PropTypes.string.isRequired,
//   Abstract: React.PropTypes.string.isRequired,
//   Speakers: React.PropTypes.array.isRequired
// }

export default Session
