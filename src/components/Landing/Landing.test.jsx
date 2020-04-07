import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Landing from './Landing';

test('should render the title', () => {
  const { getByText } = render(<Landing />);
  expect(getByText('comp(Я)artim')).toBeInTheDocument();
});
