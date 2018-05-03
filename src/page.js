import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getCards from './components/get-cards'
import GiveCard from './components/give-cards/giveCards'
import Landing from './components/landing/landing'
import LoginPage from './components/login-page/logPage'
import GuestNavbar from './components/navbar/nav'
import ProfilePage from './components/profile-page/pPage'
import RegistrationPage from './components/registration-page/regPage'
import SearchPage from './components/search-page/searchPage'
import SubmissionPage from './components/submit-page/subPage'

class App extends Component {
  render() {
    return (
    <div>
      <GuestNavbar />
      <getCards />
     </div>
    );
  }
}