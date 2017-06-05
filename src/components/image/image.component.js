import React, { Component } from 'react';

export default class Image extends Component {

    render() {
        return (
            <div className={'image-component group ' + this.props.className}>
                <img name={this.props.name} alt={this.props.name} />
            </div>
        );
    }
}