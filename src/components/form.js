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
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!street) newErrors.street = true;
    if (!suite) newErrors.suite = true;
    if (!zipcode) newErrors.zipcode = true;
    if (!city) newErrors.city = true;
    if (!lat) newErrors.lat = true;
    if (!lng) newErrors.lng = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
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
          lng,
        },
      },
    });
    setName('');
    setEmail('');
    setStreet('');
    setSuite('');
    setZipcode('');
    setCity('');
    setLat('');
    setLng('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center form">
      <h1 className="text-2xl">Novo Usuário</h1>
      <input
        type="text"
        id="name"
        placeholder="Nome*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`p-2 border rounded input ${errors.name ? 'border-error' : ''}`}
      />
      <input
        type="email"
        id="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`p-2 border rounded input ${errors.email ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="street"
        placeholder="Rua*"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        className={`p-2 border rounded input ${errors.street ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="suite"
        placeholder="Número da casa*"
        value={suite}
        onChange={(e) => setSuite(e.target.value)}
        className={`p-2 border rounded input ${errors.suite ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="zipcode"
        placeholder="Cep*"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        className={`p-2 border rounded input ${errors.zipcode ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="city"
        placeholder="Cidade*"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={`p-2 border rounded input ${errors.city ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="lat"
        placeholder="Latitude*"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        className={`p-2 border rounded input ${errors.lat ? 'border-error' : ''}`}
      />
      <input
        type="text"
        id="lng"
        placeholder="Longitude*"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        className={`p-2 border rounded input ${errors.lng ? 'border-error' : ''}`}
      />
      {Object.keys(errors).length > 0 && (
        <p className="text-error mb-2" id="error">Por favor, preencha todos os campos obrigatórios.</p>
      )}
      <button id="addUserBtn" type="submit" className="p-2 bg-primary text-black rounded w-[200px]">Adicionar novo usuário</button>
    </form>
  );
};

export default UserForm;
