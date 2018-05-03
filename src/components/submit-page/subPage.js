import React from 'react';
import './SubPage.css'

const SubmissionPage = pages => {
  return <div className="pageFrame">
    <div className="submissionTitleBox">
      <h3>Give Submission</h3>
    </div>
    <hr className="submissionPageSplit"/>
    <div>
      <div className="stepTitleBox">
        <h5>Step 1 STUFF TYPE</h5>
      </div>
      <div className="typeSelectorHolder">
        <div className="typeBox">
          <p>Beach/Pool Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Hiking Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Sports Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Leisure Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" className="form-check-input"/>
          </div>
        </div>
        <div className="typeBox">
          <p>Hobby Equipment</p>
          <div id="submissionChecks">
            <input type="checkbox" className="form-check-input"/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="stepTwoTitleBox">
        <h5>Step 2 DOCUMENT STUFF</h5>
        <div className="form-group" id="submissionEntryBox">
            <label for="submissionDecriptionEntry">Example textarea</label>
            <textarea className="form-control" id="submissionDecriptionEntry" rows="3"></textarea>
          </div>
      </div>
    </div>
    <div>
      <div className="stepTitleBox">
        <h5>Step 3 ADDRESS OF STUFF</h5>
      </div>
    </div>
    <div>
      <div className="stepTitleBox">
        <h5>Step 4 PAYMENT INFO</h5>
        <div className="paymentRequestBox">
          <p>Would you like to request payment?</p>
          <div id="paymentCheck">
            <input type="checkbox" className="form-check-input"/>
          </div>
          <div className="priceVerification">
            <p>How much? (All prices in USD)</p>
            <div className="input-group mb-4 mr-sm-2" id="priceInputField">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input type="text" className="form-control" placeholder="Price"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="submissionPageButtonBox">
      <h6 className="submissionPageButtonText">Submit</h6>
    </div>  
  </div>;
}

export default SubmissionPage