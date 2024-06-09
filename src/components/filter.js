import React, { useState } from 'react';

const UserFilter = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    onFilterChange(value, address);
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    onFilterChange(name, value);
  };

  return (
    <div className="user-filter p-4">
      <input
        type="text"
        placeholder="Filter by name"
        value={name}
        onChange={handleNameChange}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Filter by address"
        value={address}
        onChange={handleAddressChange}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default UserFilter;