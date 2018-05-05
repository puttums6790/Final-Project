import React, { Component } from 'react';
import page from './page';
import getCards from './components/get-cards'
import GiveCard from './components/give-cards/giveCards'
import Landing from './components/landing/landing'
import LoginPage from './components/login-page/logPage'
import GuestNavbar from './components/navbar/guestNav'
import UserNavbar from './components/navbar/nav'
import ProfilePage from './components/profile-page/pPage'
import RegistrationPage from './components/registration-page/regPage'
import SearchPage from './components/search-page/searchPage'
import SubmissionPage from './components/submit-page/subPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

/* ROUTES FOR LATER BUT HAVENT DESIGNED NAVBAR SWITCH YET 

<Link to="/submit">SUBMIT</Link>

<Link to="/search">SEARCH</Link>


<Link to="/profile">PROFILE</Link>   

*/


class App extends Component {
  render() {
    return (
    <Router>
    <div>
      <UserNavbar />
      
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" 
                   render={() => <LoginPage />} />
      <Route exact path="/register" 
                   render={() => <RegistrationPage />} />
      <Route exact path="/submit" 
                   render={() => <SubmissionPage />} />
      <Route exact path="/search" 
                   render={() => <SearchPage />} />
      <Route exact path="/profile" 
                   render={() => <ProfilePage />} />

          

    </div>
    </Router>
    );
  }
}

export default App;
