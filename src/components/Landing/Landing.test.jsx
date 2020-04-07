import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Landing from './Landing';

test('should render the title', () => {
  const { getByText } = render(<MemoryRouter><Landing /></MemoryRouter>);
  expect(getByText('comp(Я)artim')).toBeInTheDocument();
});
