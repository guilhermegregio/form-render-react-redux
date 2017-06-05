import React from 'react';
import ReactDOM from 'react-dom';

import Upload from './upload.component';

it('default render upload component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Upload id="upload" name="upload" className="upload" />, div);

    expect(div).toMatchSnapshot();
});
