import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ping } from '../../actions/ping.actions';

class Ping extends Component {

  handleClick = e => {
    e.preventDefault();
    this.props.ping();
  }

  render() {
    return (
      <div>
        <h2>is pinging: {this.props.isPinging.toString()}</h2>
        <button onClick={this.handleClick}>Start PING</button>
        <p>Teste</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isPinging: state.ping.isPinging };
};

export default connect(
  mapStateToProps,
  { ping }
)(Ping);
