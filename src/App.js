import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

 
 
const responseGoogle = (response) => {
  console.log(response);
}
 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <GoogleLogin
    clientId="1031979254140-uf8nemp2p36c7jn86am3alehkt0sl74i.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
      />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
