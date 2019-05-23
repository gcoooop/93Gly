import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import AlertContainer from "./alert/alert_container";
import NavBar from "./navbar/navbar";
// import Footer from "./footer/footer";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => {
  return (
    <div>
      <AlertContainer />
      <NavBar />
      <Route path="/" exact component={Splash} />
      {/* <Route path="/" exact component={Footer} /> */}
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;