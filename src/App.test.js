import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  window.URL.createObjectURL = jest.fn();
  render(<App />);
  const linkElement = screen.getByText(/vitessce-app/i)
  expect(linkElement).toBeInTheDocument();
});
