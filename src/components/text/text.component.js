import React, { Component } from 'react';

export default class Text extends Component {

    render() {
        return (
            <div className={'text-component group ' + this.props.className}>
                <input id={this.props.id} name={this.props.name} type="text" defaultValue={this.props.value} placeholder="" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.label}:</label>
            </div>
        );
    }
}