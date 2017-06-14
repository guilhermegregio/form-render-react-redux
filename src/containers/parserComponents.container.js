import React, { Component } from 'react';

import Button from '../components/button/button.component';
import Image from '../components/image/image.component';
import Map from '../components/map/map.component';
import Text from '../components/text/text.component';
import Upload from '../components/upload/upload.component';

import * as fieldsWrap from '../infraestruture/fieldsInstance';

export default class AppContainer extends Component {

    componentDidMount() {
        fieldsWrap.createFields(this.refs);
    }

    render() {
        return (
            <div>
                {this.handleFields()}
            </div>
        );
    }

    handleFields() {
        let index = 0;

        const listComponents = {
            button: Button,
            image: Image,
            map: Map,
            text: Text,
            upload: Upload
        };

        const components = this.props.fields.map(field => {
            const type = field.type.match(/([a-z]+)/)[1];
            const comp = listComponents[type];

            if (!comp) {
                return null;
            }

            return React.createElement(comp, { ...field, key: index++, ref: field.id });
        });

        return this.props.fields.length > 0 ? components : <p>Sem fields</p>;
    }
}