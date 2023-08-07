import React from 'react';
import UserCardList from '../components/userCardList';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const UserList = () => {
  const [users, setUsers] = useState([]);
  console.log("IN ALL USER DETAILS")
 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userToken = localStorage.getItem('userToken');

      const config = {
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json', // Replace with the appropriate content type if needed
        },
      };
console.log(config)
      await axios.get('https://animated-sordid-goose.glitch.me/api/admin/allUsers', config).then((res) => {
        console.log("RES ", res.data.users)
        const usersWithRoleUser = res.data.users.filter((user) => user.role === "user");
        console.log("usersWithRoleUser", usersWithRoleUser)
        // Replace with your API endpoint
        setUsers(usersWithRoleUser);
      })
      // Assuming the API response is an array of user objects
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div >


      <UserCardList users={users} />


    </div>
  );
};

export default UserList;