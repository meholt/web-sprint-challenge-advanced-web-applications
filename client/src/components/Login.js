import React, { useState } from "react";
import { axiosWithAuth } from '../util/axiosWithAuth';
// import { useHistory } from "react-router-dom";

const Login = (props) => {

const [credentials, setCredentials] = useState({
  username: '',
  password: ''
});

const handleChange = e => {
  setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  })
};
  
  // make a post request to retrieve a token from the api
const login = e => {
  e.preventDefault();
  axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      if (localStorage)
      localStorage.setItem('token', res.data.payload); //Puts in a key called token with a value of data.payload
      props.history.push('/colors'); // when you have handled the token, navigate to the BubblePage route
    })
    .catch(err => console.log(err));
};

  
  return (
    <div className='login-form'>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  )
};

export default Login;
