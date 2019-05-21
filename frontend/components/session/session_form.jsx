import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    // login is the arbitrary "default" formType, if the formType is signup then the if block executes
    let formHeader = "Log in";
    let emailInput = null;
    let insteadLink = <Link to="/signup">Sign up</Link>;

    if (this.props.formType === "signup") {
      formHeader= "Sign up"
      emailInput = (
        <label>
          Email
          <input type="text" value={this.state.email} onChange={this.updateInput("email")} />
        </label>
      );
      insteadLink = <Link to="/login">Log in</Link>;
    };

    return(
    <div className="session-form">
      <h3>{formHeader}</h3> 
      <p>{this.props.errors}</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input type="text" value={this.state.username} onChange={this.updateInput("username")} />
        </label>
        {emailInput}
        <label>
          Password
          <input type="password" value={this.state.password} onChange={this.updateInput("password")} />
        </label>
        <button>{formHeader}</button>
      </form>
    </div>
    );
  }
}

export default SessionForm;