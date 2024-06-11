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
      <div className="flex h-screen content-container" style={{ display: 'flex', justifyContent: 'center'}}>
        <div className="teste">
          <div className="flex tabs">
            <div
              className={`flex tab tab-loc ${activeTab === 'map' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <svg 
                width="25" 
                height="24" 
                viewBox="0 0 25 24" 
                fill={activeTab === 'map' ? 'black' : '#747577'}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M7.3115 7.0077C6.16404 8.19866 5.46155 9.74834 5.32211 11.3962C5.18268 13.0442 5.61479 14.6898 6.54583 16.0567C7.47687 17.4235 8.85006 18.4282 10.4346 18.9018C12.0191 19.3754 13.7184 19.289 15.2468 18.6573C15.3503 17.9823 15.1235 17.3343 15.0308 17.1075C14.8238 16.6035 14.1416 15.7422 13.0031 14.5479C12.6989 14.2284 12.7187 13.9827 12.8276 13.2546L12.8393 13.1727C12.9131 12.6741 13.0373 12.3789 14.7158 12.1125C15.569 11.9775 15.7931 12.3177 16.1036 12.7902L16.208 12.945C16.5032 13.377 16.7219 13.476 17.0522 13.6254C17.2007 13.6929 17.3852 13.7784 17.6327 13.9179C18.2195 14.2536 18.2195 14.6325 18.2195 15.4623V15.5568C18.2195 15.9087 18.1853 16.2183 18.1313 16.4874C18.8219 15.6206 19.3032 14.6062 19.5376 13.523C19.7721 12.4398 19.7533 11.3171 19.4829 10.2423C19.2125 9.16756 18.6977 8.16969 17.9786 7.32642C17.2594 6.48316 16.3554 5.81723 15.3368 5.3805C14.8391 5.7162 14.156 6.1923 13.9175 6.519C13.796 6.6855 13.6232 7.5378 13.0625 7.608C12.9167 7.626 12.7196 7.6134 12.5108 7.5999C11.951 7.5639 11.186 7.5144 10.9412 8.1795C10.7855 8.6007 10.7585 9.7455 11.2616 10.3395C11.3426 10.434 11.3579 10.6095 11.303 10.8066C11.231 11.0649 11.0861 11.2224 11.0402 11.2548C10.9538 11.2044 10.781 11.0037 10.6631 10.8678C10.3814 10.5393 10.0286 10.1298 9.5732 10.0038C9.4076 9.9579 9.2258 9.9201 9.0485 9.8823C8.5544 9.7788 7.9955 9.6609 7.865 9.3837C7.7696 9.1803 7.7705 8.9004 7.7705 8.6052C7.7705 8.2299 7.7705 7.806 7.5869 7.3947C7.52307 7.24792 7.42927 7.1161 7.3115 7.0077ZM12.5 21C7.5293 21 3.5 16.9707 3.5 12C3.5 7.0293 7.5293 3 12.5 3C17.4707 3 21.5 7.0293 21.5 12C21.5 16.9707 17.4707 21 12.5 21Z"/>
              </svg>
              Localização
            </div>
            <div
              className={`flex tab tab-new ${activeTab === 'form' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('form')}
            >
              <svg 
                width="25" 
                height="24" 
                viewBox="0 0 25 24" 
                fill={activeTab === 'form' ? 'black' : '#747577'} 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5.30002 3.90039H19.7C19.9387 3.90039 20.1676 3.99521 20.3364 4.16399C20.5052 4.33278 20.6 4.5617 20.6 4.80039V19.2004C20.6 19.4391 20.5052 19.668 20.3364 19.8368C20.1676 20.0056 19.9387 20.1004 19.7 20.1004H5.30002C5.06133 20.1004 4.83241 20.0056 4.66363 19.8368C4.49485 19.668 4.40002 19.4391 4.40002 19.2004V4.80039C4.40002 4.5617 4.49485 4.33278 4.66363 4.16399C4.83241 3.99521 5.06133 3.90039 5.30002 3.90039ZM6.20002 5.70039V18.3004H18.8V5.70039H6.20002ZM11.6 11.1004V7.50039H13.4V11.1004H17V12.9004H13.4V16.5004H11.6V12.9004H8.00002V11.1004H11.6Z"/>
              </svg>
              Novo Usuário
            </div>
          </div>
          <div className="h-full flex flex-col map-and-form-table">
            <div className="flex-1 overflow-hidden map-container">
              {renderTabContent()}
            </div>
        <div className="h-full overflow-y-auto list-table">
          <UserFilter onFilterChange={handleFilterChange} />
          <UserList users={filteredUsers} onUserClick={handleUserClick} selectedUser={selectedUser} />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
