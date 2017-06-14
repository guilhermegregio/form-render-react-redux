import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/app.container';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';
import datasource from './infraestruture/datasource';
import './index.css';

import jsonFields from './mock.json';

const formDataReducer = { data: datasource.getStore() };

const store = configureStore({ formRender: jsonFields.fields, formDataReducer });

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();