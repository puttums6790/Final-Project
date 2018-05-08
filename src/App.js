import React, { Component } from 'react';
import page from './page';
import getCards from './components/get-cards'
import GiveCard from './components/give-cards/giveCards'
import Landing from './components/landing/landing'
import Footer from './components/footer/footer'
import LoginPage from './components/login-page/logPage'
import GuestNavbar from './components/navbar/guestNav'
import UserNavbar from './components/navbar/nav'
import ProfilePage from './components/profile-page/pPage'
import RegistrationPage from './components/registration-page/regPage'
import SearchPage from './components/search-page/searchPage'
import SubmissionPage from './components/submit-page/subPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SearchCard from './components/search-cards/searchCard'

var loggedIn = true;

class App extends Component {
  render() {
    return (
    <Router>
    <div>
      if (loggedIn === true) {
        <UserNavbar />
      } else if (loggedIn === false) {
        <GuestNavbar />
      }
      
      <Route exact path="/" 
                   render={() => <div>
                                    <Landing /> 
                                    <Footer />
                                  </div>} />

      <Route exact path="/login" 
                   render={() => <div>
                                    <LoginPage /> 
                                  </div>} />
      <Route exact path="/register" 
                   render={() => <div>
                                    <RegistrationPage />
                                  </div>} />
      <Route exact path="/submit" 
                   render={() => <div>
                                    <SubmissionPage />
                                    <Footer />
                                  </div>} />
      <Route exact path="/search" 
                   render={() => <div>
                                    <SearchPage />
                                    <Footer />
                                  </div>} />
      <Route exact path="/profile" 
                   render={() => <div>
                                    <ProfilePage />
                                    <Footer />
                                  </div>} />
    </div>
    </Router>
    );
  }
}

export default App;
