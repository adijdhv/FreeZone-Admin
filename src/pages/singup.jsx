import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

    
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("in handleSubmitt",formData)
   
    // Make the POST request using Axios
    
    await axios.post('https://animated-sordid-goose.glitch.me/api/admin/signup', formData )
      .then(response => {
        // Handle success
        console.log('Singed Up Succesfully:',response);
       // localStorage.setItem('LoggedIn',true);
        navigate('/signin')
      }).catch((error)=>{
        console.log('error',error)
      })

  }
 //120 temp 4/4 Am

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control" placeholder="Enter your username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input

                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
        </div>
      </div>


    </>
  );
}
