import React, { Component } from 'react';

import Ping from '../components/ping/ping';

class PingContainer extends Component {

  render() {
    return (
      <div>
          <h1>Ping container</h1>
        <Ping />
      </div>
    );
  }
}

export default PingContainer;
