import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addField } from '../actions/formRender.actions';
import Ping from '../components/ping/ping';

class AppContainer extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super();

    this.updateFields = this.updateFields.bind(this);
  }
  componentWillMount() {
    this.context.store.subscribe(this.updateFields);
  }

  updateFields() {
    const state = this.context.store.getState();

    console.log(state);
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addField({ label: 'Oppa' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>ADD</button>
        {this.handleFields()}
        <p>Teste</p>
      </div>
    );
  }

  handleFields() {
    let index = 0;

    const mapComp = {
      text: Ping,
      map: Ping,
      upload: Ping,
      image: Ping,
      button: Ping
    };

    const components = this.props.fields.map(field => {
      const comp = mapComp[field.type];

      if (!comp) {
        return null;
      }

      return React.createElement(comp, { key: index++ });
    });

    return this.props.fields.length > 0 ? components : <p>Sem fields</p>;
  }
}

const mapStateToProps = state => ({
  fields: state.formRender
})

export default connect(
  mapStateToProps,
  { addField }
)(AppContainer);
