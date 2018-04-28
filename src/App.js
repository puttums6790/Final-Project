import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function UserNavbar(props) {
  return <div className="header">
          <div className="titleBox">
            <h1>ReLacks</h1>
          </div>
          <div className="routesBox">
            <div className="routesHolder">
              <p>Example</p>
            </div>
            <div className="routesHolder">
              <p>Example</p>
            </div>
            <div className="routesHolder">
              <p>Example</p>
            </div>
          </div>
        </div>;
}

function GuestNavbar(props) {
  return <div className="header">
          <div className="titleBox">
            <h1>ReLacks</h1>
          </div>
          <div className="routesBox">
            <div className="routesHolder">
              <p>SIGN IN</p>
            </div>
            <div className="routesHolder">
              <p>NOT A MEMBER? REGISTER</p>
            </div>
          </div>
        </div>;
}

class App extends Component {
  render() {
    return (
      <GuestNavbar />
    );
  }
}

export default App;
