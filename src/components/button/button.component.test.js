import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/store';

import Button from './button.component';

const store = configureStore();

it('default render button component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Button id="1" value="Gravar" className="button" /></Provider>, div);

    expect(div).toMatchSnapshot();
});
