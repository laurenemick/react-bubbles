import React from "react";
import axios from 'axios';
// import { axiosWithAuth } from "../utils/axiosWithAuth";

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }
  
  // axios request to retrieve token from server and save to local storage
  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', {
        username: this.state.credentials.username,
        password: this.state.credentials.password
      })
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/protected')
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input 
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input 
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    )
  }
} 
export default Login;
