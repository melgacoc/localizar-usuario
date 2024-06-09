import React from 'react';
import HomePage from './pages/dashboard';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
