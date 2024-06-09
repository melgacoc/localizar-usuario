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
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 form">
      <h1 className="text-2xl">Adicionar Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Rua"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Número da casa"
        value={suite}
        onChange={(e) => setSuite(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Cep"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Adicionar usuário</button>
    </form>
  );
};

export default UserForm;
