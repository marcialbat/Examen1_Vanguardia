import React, { Component } from 'react';
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
}