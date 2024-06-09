import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      name,
      email,
      address: {
        street,
        suite,
        zipcode,
        city,
        geo: {
          lat,
          lng
        }
      }
    });
    setName('');
    setEmail('');
    setStreet('');
    setSuite('');
    setZipcode('');
    setCity('');
    setLat('');
    setLng('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col h-screen'>
        <h1>Adicionar Usuário</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Suite"
          value={suite}
          onChange={(e) => setSuite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
