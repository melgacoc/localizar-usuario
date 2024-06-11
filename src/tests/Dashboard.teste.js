import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './utils/renderWithRouter';
import mock from './utils/mocks';

describe('Testing the Dashboard page', () => {
  it('should render a list of users', () => {
    renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

    const userCards = screen.getAllByRole('button', { name: /user card/i });
    expect(userCards).toHaveLength(10);
  });

  it('should filter users by name', () => {
    renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

    const inputName = screen.getByRole('textbox', { name: /filtrar por nome/i });
    userEvent.type(inputName, 'Leanne');
    const userCards = screen.getAllByRole('button', { name: /user card/i });
    expect(userCards).toHaveLength(1);
  });

  it('should filter users by address', () => {
    renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

    const inputAddress = screen.getByRole('textbox', { name: /filtrar por endereço/i });
    userEvent.type(inputAddress, 'Gwenborough');
    const userCards = screen.getAllByRole('button', { name: /user card/i });
    expect(userCards).toHaveLength(1);
  });

  it('should filter users by name and address', () => {
    renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

    const inputName = screen.getByRole('textbox', { name: /filtrar por nome/i });
    userEvent.type(inputName, 'Leanne');

    const inputAddress = screen.getByRole('textbox', { name: /filtrar por endereço/i });
    userEvent.type(inputAddress, 'Gwenborough');

    const userCards = screen.getAllByRole('button', { name: /user card/i });
    expect(userCards).toHaveLength(1);
  });

  it('should add a new user', () => {
    renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

    const button = screen.getByRole('button', { name: /cadastro/i });
    userEvent.click(button);

    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'Claudio');

    const inputEmail = screen.getByTestId('email');
    userEvent.type(inputEmail, 'cludio@email.com');

    const inputCity = screen.getByTestId('city');
    userEvent.type(inputCity, 'São Paulo');

    const inputStreet = screen.getByTestId('street');
    userEvent.type(inputStreet, 'Av Paulista');

    const inputSuite = screen.getByTestId('suite');
    userEvent.type(inputSuite, 'Apto 1001');

    const inputZipcode = screen.getByTestId('zipcode');
    userEvent.type(inputZipcode, '01310-100');

    const inputLat = screen.getByTestId('lat');
    userEvent.type(inputLat, '-23.564830');

    const inputLng = screen.getByTestId('lng');
    userEvent.type(inputLng, '-46.652310');

    const buttonSubmit = screen.getByTestId('addUserBtn');
    userEvent.click(buttonSubmit);

    const userCards = screen.getAllByRole('button', { name: /user card/i });
    expect(userCards).toHaveLength(11);
    });

    it('should return an error message when trying to add a user without filling in the fields', () => {
      renderWithRouterAndRedux(<App />, { initialState: { users: mock.users } });

      const button = screen.getByRole('button', { name: /cadastro/i });
      userEvent.click(button);

      const buttonSubmit = screen.getByTestId('addUserBtn');
      userEvent.click(buttonSubmit);

      const errorMessage = screen.getByTestId('error');
      expect(errorMessage).toBeInTheDocument();
    });
});