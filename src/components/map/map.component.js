import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {

    render() {
        return (
            <div className={'map-component group ' + this.props.className}></div>
        );
    }

    validate() {
        return true;
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
)(Map);
