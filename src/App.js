import React, { Component } from 'react';
import './App.css';

import ClassComponent from "./ClassComponent"
import Functions from "./Function"
let count = 5;
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClassComponent count={count} />
          <Functions />
        </header>
      </div>
    );
  }
}

export default App;
