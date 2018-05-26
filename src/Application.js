import React, { Component } from 'react';
import { auth, database } from './firebase';
import NewAccount from './NewAccount';
import Accounts from './Accounts';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    accounts: null
  };

  accountsRef = database.ref('/accounts');
  render() {
    const { accounts } = this.state;
    return (
      <div className="Application">
        <header className="Application">
          <h1>Examen</h1>
        </header>
        <div>
          <NewAccount />
          <Accounts accounts={accounts} />
        </div>
      </div>
    );
  }
}

export default Application;
