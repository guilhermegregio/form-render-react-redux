import React, { Component } from 'react';
import { connect } from 'react-redux';

class Text extends Component {

    constructor(props) {
        super(props);

        this.currentValue = null;

        this.state = { value: props.value || '', isValid: true };

        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    validate() {
        const isValid = this.state.value.length > 1;

        this.setState({ isValid });

        return isValid;
    }

    getValue() {
        return this.state.value;
    }

    render() {
        return (
            <div className={'text-component group ' + this.props.className + ' ' + (this.state.isValid ? 'valid' : 'invalid')}>
                <input id={this.props.id} name={this.props.name} type="text" placeholder="" required ref={(ref) => this.input = ref} value={this.state.value} onChange={this.handleChange} />
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
    {},
    null,
    { withRef: true }
)(Text);
