import React, { Component } from 'react';

export default class Map extends Component {

    render() {
        return (
            <div className={'map-component group ' + this.props.className}></div>
        );
    }
}