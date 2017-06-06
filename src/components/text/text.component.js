import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SUBMIT, validateError, validateSuccess } from '../../actions/formData.actions';
import buildRegExpByMask from '../../mask';

class Text extends Component {

    constructor() {
        super();

        this.currentValue = null;

        this.state = { value: '' };

    }

    static contextTypes = {
        store: PropTypes.object
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    componentDidMount(nextProps) {
        const store = this.context.store;

        store.subscribe(this.onValidateStart.bind(this));
    }

    onValidateStart() {
        if (this.context.store.getState().formDataReducer.lastAction !== SUBMIT) {
            return;
        }

        if (!this.props.mask) {
            setTimeout(() => this.props.validateSuccess(this.props.id, this.props.value), 1);
        } else {
            let er = buildRegExpByMask(this.props.mask);

            let valid = er.test(this.state.value);

            if (!valid) {
                setTimeout(() => this.props.validateError(this.props.id, this.state.value, 'Campo inválido'), 1);
            } else {
                setTimeout(() => this.props.validateSuccess(this.props.id, this.state.value), 1);
            }
        }


    }
    /**
     store.subscribe(START_VALIDATE)
        dispatch(VALIDATE_ERROR, campo, value, error)
        dispatch(VALIDATE_SUCCESS, campo, value)
     */

    render() {
        return (
            <div className={'text-component group ' + this.props.className}>
                <input id={this.props.id} name={this.props.name} type="text" placeholder="" required ref={(ref) => this.input = ref} value={this.state.value} onChange={this.handleChange.bind(this)} />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.props.label}:</label>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { validateError, validateSuccess }
)(Text);
