import React, { Component } from 'react';
import './App.css';

import Sub from './Sub';
import Pub from './Pub';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sub/>
        <Pub/>
      </div>
    );
  }
}

export default App;
