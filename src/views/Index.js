import { Router } from '@reach/router'
import React from 'react'
import { selectUser, login } from '../redux/userSlice';
import { useSelector } from 'react-redux'
import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'

const Index = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Index