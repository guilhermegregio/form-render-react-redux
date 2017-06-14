import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/store';

import Map from './map.component';

const store = configureStore();

it('default render map component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Map className="map" /></Provider>, div);

    expect(div).toMatchSnapshot();
});
