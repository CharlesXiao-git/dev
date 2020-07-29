import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <Content/>
      </div>
    );
  }
}

export default App;
