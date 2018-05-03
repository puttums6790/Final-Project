import React from 'react';
import './SearchPage.css'

const SearchPage = pages => {
  return  <div className="pageFrame">
    <div className="searchPageHeader">
      <h3>Search for Gets</h3>
    </div>
    <hr className="searchPageTitleSplit"/>
    <div>
      <input type="text" className="form-control" id="searchPageInput" placeholder="Where are you looking?" aria-describedby="basic-addon2"/>
      <p id="searchPageOutput">'Showing results for: RENDER SEARCH TEXT HERE'</p>
    </div>
    <div className="searchPageMapBox">
      <h2>GOOGLE MAPS HERE</h2>
    </div>
    <div>
      'CARDS FROM HERE ON OUT'
    </div>
  </div>;
}

export default SearchPage