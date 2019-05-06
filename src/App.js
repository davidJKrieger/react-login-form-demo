import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to secret sharer</h1>
      </div>
    );
  }
}

export default App;
