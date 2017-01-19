import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Hacker News</h1>
        </header>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
