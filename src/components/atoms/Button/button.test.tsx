import * as React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

it('hello jest', () => {
  const tree = create(<Button onClick={() => ''} text={'Hello JEST'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
