import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import PingContainer from './ping.container';
import configureStore from '../store/store';

const store = configureStore();

it('default render ping container', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><PingContainer /></Provider>, div);

  expect(div).toMatchSnapshot();
});
