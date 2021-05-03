import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, exact, path, isLogedIn }) => {
  //

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return isLogedIn ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

const mapStateToProps = ({ user }) => {
  return { isLogedIn: user.isLogedIn };
};

export default connect(mapStateToProps)(PrivateRoute);
