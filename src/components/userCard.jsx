import React from 'react';

const UserCard = ({ user,onClick }) => {
        console.log("user; ", user)
        console.log("onClick; ", onClick)
        return (
                <div className="user-card " onClick={onClick}>

                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                </div>
        );
};

export default UserCard;