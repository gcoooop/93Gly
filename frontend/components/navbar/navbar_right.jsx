import React from "react";
import { Link } from "react-router-dom";
import NavBarDropdown from "./navbar_dropdown";

class NavBarRight extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = { username: "earthling365", password: "password" };
    this.dropdownShow = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.dropdownShow.current.toggleShow();
  }

  render() {
    const { currentUser, logout, demoUserLogin } = this.props;
    let navRight;
    if (currentUser) {
      navRight = (
      <ul className="nav-right">
        <li className="nav-right-user" key={0} onClick={this.handleClick}>
          <NavBarDropdown ref={this.dropdownShow} logout={logout}/>
        </li>
        <li className="nav-right-plus"></li>
        {/* ^^^^ add click handler on this for redirect to add photo page ^^^^ */}
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