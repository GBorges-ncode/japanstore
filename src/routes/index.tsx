import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HomePage from '../pages/HomePage';
import Store from '../pages/Store';
import Sushi from '../pages/Recipes/Sushi';
import Rice from '../pages/Recipes/Rice';
import Soups from '../pages/Recipes/Soups';
import Pasta from '../pages/Recipes/Pasta';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/store" component={Store} />
    <Route path="/sushi" component={Sushi} />
    <Route path="/rice" component={Rice} />
    <Route path="/soups" component={Soups} />
    <Route path="/pasta" component={Pasta} />
  </Switch>
);

export default Routes;
