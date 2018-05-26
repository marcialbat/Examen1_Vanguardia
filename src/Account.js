import React, { Component } from 'react';
import { string, object, func } from 'prop-types';
import map from 'lodash/map';
import './Account.css';

class Account extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="Account">
        <h4>{name}</h4>
      </div>
    );
  }
}

Account.propTypes = {
  name: string,
  votes: object,
  user: object,
  handleSelect: func,
  handleDeselect: func
};

export default Account;
