import React, { Component } from 'react';

export default class Upload extends Component {

    render() {
        return (
            <div className={'upload-component group ' + this.props.className}>
                <input id={this.props.id} name={this.props.name} type="file" />
            </div>
        );
    }
}