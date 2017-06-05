import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/app.container';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import jsonFields from './mock.json';

const store = configureStore({ formRender: jsonFields.fields });

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();