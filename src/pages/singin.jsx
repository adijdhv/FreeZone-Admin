import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const Signin = () => {
  console.log("IN SIGNIN COMPONENT")
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    //username: '',
    email: '',
    password: ''
  })
  console.log("Form Data COllected")

    
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log("Form Data Set")

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in handleSubmit")
    //sessionStorage.setItem('userToken', token);

    // Make the POST request using Axios
    await axios.post('https://animated-sordid-goose.glitch.me/api/admin/signin', formData)
      .then(response => {
        // Handle success
        console.log('Logged in Succesfull',response.data.token );
      // sessionStorage.setItem('userToken', token);
      localStorage.setItem('userToken', response.data.token);
         
      localStorage.setItem('LoggedIn',true);
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })

  }



 // useEffect(async () => {//code with await keyword here}, [])

  return (
        <>
        
        <h2 className="text-center">Sign in</h2>
        <div className="container mt-5">
       
        <div className="row justify-content-center">
          <div className="col-md-6">
            
            <form onSubmit={handleSubmit} >
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control" placeholder="Enter your email" />
              </div>
      
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password" />
              </div>
      
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </form>
          </div>
        </div>
      </div>
      </>
     
    );
  };


