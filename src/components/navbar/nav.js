import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";

/* function UserNavbar() {
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
} */

const GuestNavbar = props => {
  return <div className="header">
          <div className="titleBox">
            <h1>ReLacks</h1>
          </div>
          <div className="routesBox">
            <div className="routesHolder">
              <Link to="/login">SIGN IN</Link>
            </div>
            <div className="routesHolder">
              <Link to="/register">Not a member REGISTER</Link>
            </div>
          </div>
        </div>;
}

export default GuestNavbar;