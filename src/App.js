import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterIncrementQuery } from './actions/counter/counterActionTypes.js'
import { Consumer } from './appContext.js';

export default class App extends Component {
  render() {
    return (
      <Consumer>
        {({ mediator, store }) => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                <button onClick={() => mediator.send(new CounterIncrementQuery())}>Increment Counter</button>
                <span>Count: {store.counter}</span>
              </p>
            </div>);
        }}
      </Consumer>
    );
  }
}
