import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../util/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser } from '../store/action';
import UserMap from '../components/map';
import UserList from '../components/list';
import UserForm from '../components/form';
import UserFilter from '../components/filter';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('map');

  useEffect(() => {
    document.title = 'Localizar usuário';
    fetchUsers().then((users) => {
      dispatch(setUsers(users));
      setFilteredUsers(users);
    });
  }, [dispatch]);

  const handleUserClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  const handleFilterChange = (name, address) => {
    const filtered = users.filter(user => {
      return (
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        (user.address.street.toLowerCase().includes(address.toLowerCase()) ||
          user.address.city.toLowerCase().includes(address.toLowerCase()) ||
          user.address.suite.toLowerCase().includes(address.toLowerCase()) ||
          user.address.zipcode.toLowerCase().includes(address.toLowerCase()))
      );
    });
    setFilteredUsers(filtered);
  };

  const handleAddUser = (newUser) => {
    dispatch(addUser(newUser));
  };

  const renderTabContent = () => {
    if (activeTab === 'map') {
      return <UserMap users={filteredUsers} selectedUser={selectedUser} />;
    } else if (activeTab === 'form') {
      return <UserForm addUser={handleAddUser} />;
    }
  };

  return (
    <div className="container">
      <header className='header'>
      <h1 className="text-3xl mb-4">Localizar usuários</h1>
      </header>
      <div className="flex h-screen content-container" style={{ display: 'flex', justifyContent: 'center'}}>
        <div className="w-2/3 h-full flex flex-col pt-[50px] map-and-form-table">
          <div className="flex tabs">
            <div
              className={`tab ${activeTab === 'map' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              Localização
            </div>
            <div
              className={`tab ${activeTab === 'form' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('form')}
            >
              Cadastro
            </div>
          </div>
          <div className="flex-1 overflow-hidden map-container">
            {renderTabContent()}
          </div>
        </div>
        <div className="w-1/3 h-full overflow-y-auto list-table pt-[50px]">
          <UserFilter onFilterChange={handleFilterChange} />
          <UserList users={filteredUsers} onUserClick={handleUserClick} selectedUser={selectedUser} />
        </div>
      </div>
      <footer className='footer'>
      <h1 className="text-2xl mb-4">
        <a href="https://github.com/melgacoc/localizar-usuario" target="_blank" rel="noopener noreferrer">
          Link para o repositório do projeto
      </a>
    </h1>
      </footer>
    </div>
  );
};

export default HomePage;
