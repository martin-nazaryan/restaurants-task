import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import SignInPage from '../../pages/SignIn';
import SignUpPage from '../../pages/SignUp';
import RestaurantsPage from '../../pages/Restaurants';
import RestaurantPage from '../../pages/Restaurant';
import PrivateRoute from '../../reusable/PrivateRoute';

import './style.scss';

const { Content } = Layout;

const AppContent = () => (
  <Content className="app-content">
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>

        <Route path="/sign-up">
          <SignUpPage />
        </Route>

        <PrivateRoute exact path="/">
          <RestaurantsPage />
        </PrivateRoute>

        <PrivateRoute exact path="/:id">
          <RestaurantPage />
        </PrivateRoute>

        <Redirect to="/" />

      </Switch>
    </Router>
  </Content>
);

export default AppContent;
