import React from "react";
import { Link } from "react-router-dom";
import NavBarDropdown from "./navbar_dropdown";

class NavBarRight extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = { username: "earthling365", password: "password" };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = { dropdownShow: "hidden" };
  }

  handleOutsideClick(event) {
    const dropdownShow = "hidden";
    if (this.state.dropdownShow === "active") this.setState({ dropdownShow });
  }

  componentDidUpdate() {
    if (this.state.dropdownShow === "active") {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    };
  }

  handleDropdownClick() {
    const dropdownShow = (this.state.dropdownShow === "hidden" ? "active" : "hidden");
    this.setState({ dropdownShow });
  }


  render() {
    const { currentUser, logout, demoUserLogin } = this.props;
    let navRight;
    if (currentUser) {
      navRight = (
      <ul className="nav-right">
        <li className="nav-right-user" key={0} onClick={this.handleDropdownClick}>
          <ul className={`nav-right-dropdown ${this.state.dropdownShow}`}>
            <li onClick={logout}>Log Out</li>
          </ul>
        </li>
        <li><Link to="/manage" className="nav-right-plus"/></li>
      </ul>
        );
    } else {
      navRight = (
        <ul className="nav-right">
          <li className="nav-demologin-a" onClick={() => demoUserLogin(this.demoUser)}>Demo Login</li>
          <li className="nav-login"><Link to="/login">Log in</Link></li>
          <li className="nav-signup"><Link to="/signup">Sign up</Link></li>
        </ul>
      );
    };
  
    return (
      <div className="nav-right-wrapper">
        {navRight}
      </div>
    );
  }
}

export default NavBarRight;