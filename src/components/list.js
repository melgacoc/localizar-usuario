import React, { useState } from 'react';

const UserList = ({ users, onUserClick }) => {

  const [selectedUser, setSelectedUser] = useState(null);
  const handleClick = (user) => {
    setSelectedUser(user);
    onUserClick(user);
  }
  return (
    <div className="user-list">
      {users.map(user => (
        <div 
          key={user.id} 
          className={`mb-2 p-4 border rounded shadow cursor-pointer user-card ${selectedUser && selectedUser.id === user.id ? 'user-selected' : ''}`}
          onClick={() => handleClick(user)}
        >
          <h3 className="text-xl">{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;