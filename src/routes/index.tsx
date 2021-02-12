import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HomePage from '../pages/HomePage';
import Store from '../pages/Store';
import Cart from '../pages/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/store" component={Store} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
