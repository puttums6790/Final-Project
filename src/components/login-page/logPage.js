import React from 'react';
import './LogPage.css'
import './hikingImageTwo.jpg'

const LoginPage = pages => {
  return <div className="registrationFrame">
    <div className="loginBox">
        <div className="form-group" id="registrationFieldBox">
          <label for="usernameRegistrationField">Username</label>
          <input type="password" className="form-control" id="usernameRegistrationField" placeholder="Username"/>
        </div>
        <div className="form-group" id="registrationFieldBox">
          <label for="passwordRegistrationField">Password</label>
          <input type="password" className="form-control" id="passwordRegistrationField" placeholder="Password"/>
        </div>
        <div className="registrationPageButtonBox">
        <h6 class="registrationPageButtonText">Submit</h6>
      </div>
        

    </div>
  </div>;
}

export default LoginPage