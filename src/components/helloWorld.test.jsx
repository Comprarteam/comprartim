import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import HelloWorld from './helloWorld';

test('should test something', () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
