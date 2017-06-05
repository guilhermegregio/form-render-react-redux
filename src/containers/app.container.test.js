import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './app.container';
import configureStore from '../store/store';

import RequestFields from '../mock.json';

const store = configureStore({formRender: RequestFields.fields});

it('default render app container', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, div);

  expect(div).toMatchSnapshot();
});
