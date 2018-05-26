import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Account from './Account';
import map from 'lodash/map';
import './Accounts.css';

class Accounts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { accounts } = this.props;
    return (
      <section className="Accounts">{map(accounts, (account, key) => <Account key={key} {...account} />)}</section>
    );
  }
}

Accounts.propTypes = {
  user: PropTypes,
  AccountsRef: PropTypes.object,
  Accounts: PropTypes.object
};

export default Accounts;
