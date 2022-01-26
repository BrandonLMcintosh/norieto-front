import { Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "./components/auth/UserContext/UserContext";
//import Component from "./components/x/x";

function AuthRoute({ exact, path, children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

function Routes({ signup, login }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <FormLogin login={login} />
        </Route>
        <Route path="/signup">
          <FormSignup signup={signup} />
        </Route>
        <AuthRoute path="/map">
          <Map />
        </AuthRoute>
        <AuthRoute path="/profile">
          <FormProfile />
        </AuthRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
