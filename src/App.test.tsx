import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory()

test('renders learn react link', () => {
  render(<Router history={history} ><App /></Router>);
  const linkElement = screen.getByText(/Shopi kazi/i);
  expect(linkElement).toBeInTheDocument();
});
