import React, { Component } from 'react';
import './App.css';

import Sub from './Sub';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h3> Head over to the admin panel and publish a message to Channel1 through the debug console in your keyset</h3>
        <Sub />
      </div>
    );
  }
}

export default App;
