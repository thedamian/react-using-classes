import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {store} from "./store"
import './App.css';

import ClassComponent from "./ClassComponent"
import Functions from "./Function"
import Pizzas from './Pizzas';
let count = 5;
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ClassComponent count={count} />
          <Functions />
          <Pizzas />
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
