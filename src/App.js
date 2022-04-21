import './App.css';
import {Router} from '@reach/router';
//components and views
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import Login from './views/Login';
import BusinessPortal from './views/BusinessPortal';
import BusinessReg from './views/BusinessReg';

// redux imports
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import LandingPage from './views/LandingPage';
import Profile from './views/Profile';
import axios from 'axios';
import Index from './views/Index';
import Meets from './views/Meets';
import { selectUser } from './redux/userSlice';
import Feed from './components/Feed';
import MeetDetails from './views/MeetDetails';
import VehicleForm from './components/VehicleForm';
import { Redirect } from '@reach/router';
import ErrorPage from './views/ErrorPage';

function App() {

  return (
    <Router>
      <Index path="/">
        <LandingPage path="" default />
        <Login path="/login" />
        <Register path="/register" />
      </Index>
      <Dashboard path="/app" >
        <Feed path="/" />
        <Profile path="/Profile/:displayName" />
        <Meets path="/Meets" />
        <MeetDetails path="Meets/:meetId" />
        <ErrorPage default />
      </Dashboard>
    </Router>
    
  );
}

export default App;
