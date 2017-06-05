import React from 'react';
import ReactDOM from 'react-dom';

import ParserComponentsContainer from './parserComponents.container';

const textField = {
    name: 'txtFullname',
    id: 'txtFullname',
    value: '',
    type: 'text',
    className: 'input'
};

const textAddressField = {
    name: 'txtAddress',
    id: 'txtAddress',
    value: '',
    type: 'text:address',
    className: 'input'
};

const buttonField = {
    type: 'button',
    name: 'btnSave',
    id: 'btnSave',
    value: 'Gravar',
    className: 'input'
};

const imageField = {
    type: 'image',
    name: 'imgAvatar',
    id: 'imgAvatar',
    className: 'image'
}

const uploadField = {
    type: 'upload',
    name: 'uplImage',
    id: 'uplImage',
    className: 'upload-button'
}

const mapField = {
    type: 'map',
    name: 'mapRenderer',
    id: 'mapRenderer',
    className: 'map-renderer'
};

it('default render parser component container', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParserComponentsContainer fields={[textField, textAddressField, mapField, uploadField, imageField, buttonField]} />, div);

    expect(div).toMatchSnapshot();
});
