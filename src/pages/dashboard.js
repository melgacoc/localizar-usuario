import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(setUsers(response.data));
        setFilteredUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Localizar usuários</h1>
      <div className="flex h-screen" style={{ display: 'flex' }}>
        <div className="w-2/3 h-full flex flex-col map-and-form-table">
          <div className="flex" >
            <button
              className={`flex-1 p-2 ${activeTab === 'map' ? 'bg-gray-300' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('map')}
            >
              Map
            </button>
            <button
              className={`flex-1 p-2 ${activeTab === 'form' ? 'bg-gray-300' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('form')}
            >
              Form
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            {renderTabContent()}
          </div>
        </div>
        <div className="w-1/3 h-[500px] overflow-y-auto list-table">
          <UserFilter onFilterChange={handleFilterChange} />
          <UserList users={filteredUsers} onUserClick={handleUserClick} selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
