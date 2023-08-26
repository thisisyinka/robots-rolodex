import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

test('renders input box', () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText('Search robots...');
  expect(inputElement).toBeInTheDocument();
});
