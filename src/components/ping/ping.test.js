import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Ping from './ping';
import configureStore from '../../store/store';

const store = configureStore();

it('default render app component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Ping /></Provider>, div);

  expect(div).toMatchSnapshot();
});
