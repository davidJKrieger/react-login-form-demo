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
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to secret sharer</h1>
        {
          this.state.loggedIn === true ?
          <SecretsIndex username={this.state.username}></SecretsIndex>
          :
          <LoginForm handleLogin = {this.handleLogin} ></LoginForm>
        }
      </div>
    );
  }
}

export default App;

