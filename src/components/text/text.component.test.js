import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../../store/store';

import Text from './text.component';

const store = configureStore();

it('default render text component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Text id="text" name="text" value="test value" className="text" label="Text" /></Provider>, div);

    expect(div).toMatchSnapshot();
});
