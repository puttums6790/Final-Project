import React from 'react';
import './PPage.css'

const ProfilePage = pages => {
  return <div className="profileFrame">
  <div className="profileHeader">
    <div className="profileHeaderPictureBox">
      <img src="ProfilePicPlaceholder.png" className="profileHeaderPicture"/>
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
      'give card'
    <h3 className="myGets">MY GETS</h3>
      'get card'
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