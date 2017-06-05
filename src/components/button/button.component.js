import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        return (
            <div className={'button-component group ' + this.props.className}>
                <button id={this.props.id} type="button" className="button primary" value={this.props.value}>
                    <span className="load fa fa-spinner"></span>
                    <span className="value">{this.props.value}</span>
                </button>
            </div>
        );
    }
}