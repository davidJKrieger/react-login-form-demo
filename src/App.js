import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import SecretsIndex from './SecretsIndex/SecretsIndex';

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
        <LoginForm></LoginForm>
        <SecretsIndex></SecretsIndex>
      </div>
    );
  }
}

export default App;
