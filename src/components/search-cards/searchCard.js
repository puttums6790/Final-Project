import React from 'react';
import './SearchCard.css'

const SearchCard = props => {
  return <div className="searchStuffBox">
  <div className="searchStuffTitleBox">
    <h3 className="searchStuffTitle">THE THING</h3>
  </div>
  <div className="searchStuffContentMap">
    <p>THIS IS WHERE GOOGLE MAPS GOES</p>
  </div>
  <div className="searchStuffContentBox">
    <div className="searchStuffContentText">
      <p>Category: </p>
      <p>Description: </p>
      <p>Dates Claimed: </p>
    </div>
    <div className="searchStuffContentSubtextBox">
      <div className="searchStuffContentSubtext">
        <h6 className="searchStuffContentSubtextText">Claim Item</h6>
      </div>      
    </div>
  </div>
</div>
}

export default SearchCard