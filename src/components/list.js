import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div 
          key={user.id} 
          className="user-card mb-2 p-4 border rounded shadow cursor-pointer" 
          onClick={() => onUserClick(user)}
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