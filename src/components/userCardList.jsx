import React from 'react';
import UserCard from './userCard';
import '../styles/cards.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom';

const UserCardList = ({ users }) => {
  const navigate = useNavigate();
  let count = 0
  const handlecardClick = (user) =>{
    
    console.log("IN USERCARDLISt, HandleCardClick Showing User.id",user._id)
    count++
    console.log("Count: ",count)
     navigate(`/UserList/${user._id}`, { state: user });
  }
  return (
    <div className="user-card-list" >
        {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => handlecardClick(user)} />
      ))}
    
    </div>
  );
};

export default UserCardList;