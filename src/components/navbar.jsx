import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Navbar = () => {
  
        const [isLoggedIn, setIsLoggedIn] = useState(false);
         const navigate = useNavigate();

         useEffect(()=>{
          const userToken = localStorage.getItem('userToken');
          userToken?setIsLoggedIn(true):setIsLoggedIn(false)

         } )
         
        const handleLogin = async () => {
                navigate('/signin') 
                
                 
        }
        const handleSignup = async () => {
                console.log("In sign up")
                navigate('/signup') 
                 
        }

     

        // } else {
        const handleLogout = async () => {
                console.log("IN HANDLE LOGOUT")
                //console.log("USER TOKEN", userToken)
                try { 
                  const userToken = localStorage.getItem('userToken');
                  console.log("USERTOKEN: ",userToken)
                  const config = {
                    headers: {
                      'Authorization': `Bearer ${userToken}`,
                      'Content-Type': 'application/json', // Replace with the appropriate content type if needed
                    },
                  };
                  console.log("CONFIG: ",config)
                        // Make a POST request to the sign-out API endpoint
                        const apiUrl = 'https://animated-sordid-goose.glitch.me/api/admin/signout'
                        console.log("API URL: ",apiUrl)
                        await axios.get(apiUrl,config).then((res)=>{
                          console.log("LOGGED out successsfully",res)
                                localStorage.removeItem("userToken");

                                 
                        }).catch((err)=>{
                                console.log(err)
                                 
                        })

                        // If the sign-out is successful, you can perform additional actions here, such as updating the app state or showing a success message.

                        
                } catch (error) {
                        // Handle errors that may occur during the sign-out process
                        console.error('Error signing out:', error);
                }
                
        }

        // }



        



        return (
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                                <a class="navbar-brand" href="#">Freezone-Portal</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page"
                                                                onClick={() => navigate('/')} href=''>Home</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link" href="#">Link</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                                </li>
                                        </ul>
                                        <div>
                                                {isLoggedIn ? (
                                                        // If user is logged in, show the Logout button
                                                        <button onClick={handleLogout}>Logout</button>
                                                ) : (
                                                        // If user is not logged in, show the Login button
                                                        <div>
                                                                <button onClick={handleSignup} >Sign Up</button>

                                                                <button onClick={handleLogin} >Sign In</button>
                                                                 
                                                        </div>

                                                )}
                                        </div>

                                </div>
                        </div>
                </nav>

        );
};

export default Navbar;