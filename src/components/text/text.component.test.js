import React from 'react';
import ReactDOM from 'react-dom';

import Text from './text.component';

it('default render text component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text id="text" name="text" value="test value" className="text" label="Text" />, div);

    expect(div).toMatchSnapshot();
});
