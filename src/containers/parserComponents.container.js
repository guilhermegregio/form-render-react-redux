import React, { Component } from 'react';

import Button from '../components/button/button.component';
import Image from '../components/image/image.component';
import Map from '../components/map/map.component';
import Text from '../components/text/text.component';
import Upload from '../components/upload/upload.component';

export default class AppContainer extends Component {

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
            const comp = listComponents[field.type];

            if (!comp) {
                return null;
            }

            return React.createElement(comp, { ...field, key: index++ });
        });

        return this.props.fields.length > 0 ? components : <p>Sem fields</p>;
    }
}