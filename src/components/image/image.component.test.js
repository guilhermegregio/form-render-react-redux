import React from 'react';
import ReactDOM from 'react-dom';

import Image from './image.component';

it('default render image component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image name="Image" className="image" />, div);

    expect(div).toMatchSnapshot();
});
