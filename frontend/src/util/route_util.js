import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} 
    render={props => (
      !signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    )} />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    signedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/sign-in" />
      )
  )} />
);

const mapStateToProps = state => (
  {signedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));