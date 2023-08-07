import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  console.log("IN GOME")
  const navigate = useNavigate();



  const handleUserList = (e) => {
    const userToken = localStorage.getItem('userToken');
    console.log("USERTOKEN: ", userToken)

    if (userToken) {
      console.log("YES EXIST")
      navigate('/UserList')
    } else {
      console.log("Doesn't exist")
      navigate('/Signin')
    } 
  };
  const handleAdminList = (e) => {
    const userToken = localStorage.getItem('userToken');
    console.log("USERTOKEN: ", userToken)

    if (userToken) {
      navigate('/AdminList')
    } else {

      navigate('/Signin')
    }

  };
  return (
    <div className="container">
      <div className="container">
        <h1 className="welcome-heading">Welcome to Freezone Admin Dashboard</h1>
        {/* Rest of the code for the cards and other components */}
      </div>

      <div className="d-flex flex-row gx-4">
        <div class="col-md-6 mb-md-0 p-md-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">Get User List</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary" onClick={handleUserList}>Go to USER LIST</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-md-0 p-md-4">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">Get Admin lists</h5>
              <p className="card-text"> </p>
              <a href="#" className="btn btn-primary " onClick={handleAdminList}>Go to Admin</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Home;
