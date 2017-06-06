import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submit } from '../../actions/formData.actions';

class Button extends Component {

    handleClick(e) {
        e.preventDefault();
        this.props.submit();
    }

    render() {
        return (
            <div className={'button-component group ' + this.props.className}>
                <button id={this.props.id} type="button" className="button primary" value={this.props.value} onClick={this.handleClick.bind(this)}>
                    <span className="load fa fa-spinner"></span>
                    <span className="value">{this.props.value}</span>
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { submit }
)(Button);
