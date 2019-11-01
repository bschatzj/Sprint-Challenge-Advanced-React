import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('contains button', () => {
  const { getByText } = render(<App />);
  getByText(/Dark Mode/);
});

test('shows players', () => {
  const { findByText } = render(<App />);
  findByText(/Alex Morgan/i);
});

test('true is true', () => {
  expect(true).toBe(true);
});
