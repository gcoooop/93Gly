import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./signup_form_container";
import LoginFormContainer from "./login_form_container";

const App = () => {
  return (
    <div>
      <h1>93Gly</h1>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;