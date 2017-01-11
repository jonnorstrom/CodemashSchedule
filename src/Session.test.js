import React from 'react';
import renderer from 'react-test-renderer'
import Session from './Session';

it('renders without crashing', () => {
  const output = renderer.create(<Session title="a" abstract="b"/>);

  expect(output).toMatchSnapshot()
});
