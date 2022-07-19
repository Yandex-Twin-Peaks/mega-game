import * as React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

it('Снэпшот кнопки', () => {
  const tree = create(<Button onClick={() => ''} text={'Кнопка'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
