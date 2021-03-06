import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state)
  }

  render() {
    // login is the arbitrary "default" formType, if the formType is signup then the if block executes
    let formHeader = "Log In to 93Gly";
    let buttonText = "Log in";
    let usernameLabel = <label>Username or Email</label>;
    let emailLabel = null;
    let emailInput = null;
    let insteadLink = <Link to="/signup"> Sign up</Link>;
    let insteadSpan = <span>Don't have an account? {insteadLink}</span>

    if (this.props.formType === "signup") {
      formHeader= "Join 93Gly"
      buttonText = "Sign up";
      usernameLabel = <label>Username</label>
      emailLabel = <label>Email</label>;
      emailInput = <input type="text" value={this.state.email} onChange={this.updateInput("email")} />;
      insteadLink = <Link to="/login">Log in</Link>;
      insteadSpan = <span>Already have an account? {insteadLink}</span>
    };

    let errorClass;
    if (this.props.errors.length) errorClass = "error";

    return(
    <div className="session-page">
      <form className={`session-form ${errorClass}`}onSubmit={this.handleSubmit}>
        <h3>{formHeader}</h3> 

        {usernameLabel}
        <input type="text" value={this.state.username} onChange={this.updateInput("username")} />
        
        {emailLabel}
        {emailInput}
        
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={this.updateInput("password")} />
        
        <button>{buttonText}</button>
        {insteadSpan}
      </form>
    </div>
    );
  }
}

export default SessionForm;