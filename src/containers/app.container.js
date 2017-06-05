import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ParserComponentsContainer from '../containers/parserComponents.container';

class AppContainer extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  render() {
    return (
      <div>
        <ParserComponentsContainer fields={this.props.fields} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fields: state.formRender
})

export default connect(
  mapStateToProps
)(AppContainer);
