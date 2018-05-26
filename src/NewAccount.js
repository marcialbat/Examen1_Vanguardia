import React, { Component } from 'react';
import { object } from 'prop-types';
import './NewAccount.css';
import { databse } from './firebase';

class NewAccount extends Component {
  state = {
    name: ''
  };

  accountsRef = databse.ref('/accounts');

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.accountsRef.push({ name: this.state.name });
  };

  render() {
    const { name } = this.state;

    return (
      <form className="NewAccounts">
        <input
          type="text"
          value={name}
          placeholder="Name of Fine Establishment"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewAccounts.propTypes = {
  accountsRef: object
};

export default NewAccounts;
