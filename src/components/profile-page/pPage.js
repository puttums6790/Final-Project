import React from 'react';
import './PPage.css'

const ProfilePage = pages => {
  return <div className="profileFrame">
  <div className="profileHeader">
    <div className="profileHeaderPictureBox">
    </div>
    <div className="profileHeaderInfo">
      <h1 className="profileHeaderName">firstName lastName</h1>
    </div>
  </div>
  <div className="giveGetTrackerBox">
    <p>Gives: </p>
    <p>Gets: </p>
  </div>
  <div className="myStuffFrame">
    <h3 className="myGives">MY GIVES</h3>
    <div className="cardHolder">
      <p>load cards here</p>
    </div>
    <h3 className="myGets">MY GETS</h3>
    <div className="cardHolder">
      <p>load cards here</p>
    </div>
  </div>
  <div className="personalInfoBox">
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
  </div>
</div>;
}

export default ProfilePage