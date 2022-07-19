import { render, screen, within } from '@testing-library/react';
import App from './App';
import Viewer from './Viewer';

const { SampleJson } = require('../public/config/iss-human-brain-advanced.json');

test('renders loading text', () => {
  window.URL.createObjectURL = jest.fn();
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i)
  expect(linkElement).toBeInTheDocument();
});

test('renders development text', () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer />);
  const linkElement = screen.getByText(/This app is in active development/i)
  expect(linkElement).toBeInTheDocument();
});

test('renders spatial text', () => {
  window.URL.createObjectURL = jest.fn();
  const mockConfig = {a:2, b:2, c:3};
  const viewer = render(<Viewer config={SampleJson} />);

const spatial = viewer.getByText(/Spatial/i);
expect(spatial).toBeInTheDocument();
});