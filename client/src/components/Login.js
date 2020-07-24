import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
// const initialState = {
//   username: '',
//   password: ''
// }

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })
  const history = useHistory()
  
  // axios request to retrieve token from server and save to local storage
  const login = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', {
        username: formValues.username,
        password: formValues.password
      })
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/protected')
      })
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={login}>
        <input 
          type='text'
          name='username'
          value={formValues.username}
          onChange={handleChange}
        />
        <input 
          type='password'
          name='password'
          value={formValues.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  )
} 
export default Login;
