import React from 'react';
import ReactDOM from 'react-dom';

import Button from './button.component';

it('default render button component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button id="1" value="Gravar" className="button" />, div);

    expect(div).toMatchSnapshot();
});
