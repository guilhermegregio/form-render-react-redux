import React from 'react';
import ReactDOM from 'react-dom';

import Map from './map.component';

it('default render map component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map className="map" />, div);

    expect(div).toMatchSnapshot();
});
