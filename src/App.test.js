import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading text', () => {
  window.URL.createObjectURL = jest.fn();
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i)
  expect(linkElement).toBeInTheDocument();
});
