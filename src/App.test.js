import { render, screen } from '@testing-library/react';
import App from './App';

test('renders your custom content', () => {
  render(<App />);
  const element = screen.getByText(/your expected text/i);
  expect(element).toBeInTheDocument();
});

