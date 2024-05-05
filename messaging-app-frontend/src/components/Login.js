import React from 'react'
import { Button } from '@mui/material'
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
  const [{}, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch((error) => {
        // Consider implementing more robust error handling
        console.error("Authentication error:", error);
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="app logo" /> 
        <div className="login__text">
          <h1>Sign in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login;
