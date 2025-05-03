import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cloud security heading', () => {
  render(<App />);
  const element = screen.getByText(/welcome to cloud security/i);
  expect(element).toBeInTheDocument();
});
