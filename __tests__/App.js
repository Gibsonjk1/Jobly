import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../src/App';

test('renders home page', () => {
  render(<App />);
  expect(screen.queryByText('Welcome Stranger')).not.toBeNull();
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
