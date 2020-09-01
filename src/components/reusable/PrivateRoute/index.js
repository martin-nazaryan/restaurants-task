import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fakeAuth } from '../../../helpers';

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => (fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/sign-in',
          state: { from: location },
        }}
      />
    ))}
  />
);

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
