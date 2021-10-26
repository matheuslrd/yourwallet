import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Switcher() {
  return (
    <Switch>
      <Route exact path="/yourwallet/" component={ Login } />
      <Route path="/yourwallet/carteira" component={ Wallet } />
    </Switch>
  );
}

export default Switcher;
