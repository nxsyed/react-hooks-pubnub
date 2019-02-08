import React, { Component } from 'react';
import './App.css';

import Sub from './Sub';
import Pub from './Pub';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h3> Hit the publish button to see how many times you've published!</h3>
        <Sub />
        <Pub />
      </div>
    );
  }
}

export default App;
