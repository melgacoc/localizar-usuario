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
    <div className="user-filter pb-4">
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={name}
        onChange={handleNameChange}
        className="p-2 border rounded mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Filtrar por endereço"
        value={address}
        onChange={handleAddressChange}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default UserFilter;
