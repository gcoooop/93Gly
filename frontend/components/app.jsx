import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import AlertContainer from "./alert/alert_container";
import NavBar from "./navbar/navbar";
// import Footer from "./footer/footer";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from "./posts/post_show_container";

const App = () => {
  return (
    <div>
      <AlertContainer />
      <Route path="/" component={NavBar} />
      <AuthRoute path="/" exact component={Splash} />
      <ProtectedRoute path="/posts" exact component={PostIndexContainer} />
      <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      {/* <Route path="/" exact component={Footer} /> */}
    </div>
  );
};

export default App;