import React, { Component } from 'react';
import Expenselist from './components/Expenselist';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Expenselist/>
      </div>
    );
  }
}

export default App;
