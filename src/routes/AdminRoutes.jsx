import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
 
 
import Home from '../pages/Home';
 import { Signin } from '../pages/singin';
import { Signup } from '../pages/singup';
import UserList from '../pages/AllUsers';
import AdminList from '../pages/AllAdmin';
import UserDetails from '../pages/UserDetails';


const AdminRoutes =  () => {
        console.log("IN   routes")
  return (
      
        
        <Routes>
       
       
        <Route path='/' element={<Home/>} />
        {/* //<Route path='/UserList' element={<UserCardList/>} /> */}
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Signin' element={<Signin/>} />

        <Route path="/UserList" element={<UserList />} /> 
        <Route path="/UserList/:_id" element={<UserDetails />} /> 
        <Route path='/AdminList' element={<AdminList/>}  /> 
         

        {/* <Route path='/signin' element = {<Signin/>}/>
          */}
         
        
         </Routes>
        
   );
};

export default AdminRoutes;