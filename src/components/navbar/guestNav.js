import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";


const GuestNavbar = props => {
  return <div className="header">

          <Link to="/"><div className="titleBox">
            <h1 className="titleText">ReLacks</h1>
          </div></Link>
          <div className="routesBox">
            <Link to="/login"><div className="routesHolder">
              <p>SIGN IN</p>
            </div></Link>
            
            <Link to="/register"><div className="routesHolder">
              <p>Not a member REGISTER</p>
            </div></Link>
          </div>
        </div>;
}

export default GuestNavbar;