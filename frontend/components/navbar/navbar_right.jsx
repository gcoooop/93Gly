import React from "react";
import { Link } from "react-router-dom";

const NavBarRight = ({ currentUser, logout, demoUserLogin }) => {

  const demoUser = { username: "earthling365", password: "password" };

  let navRightLis;
  if (currentUser) {
    navRightLis = <li className="nav-logout" onClick={logout}>Log out</li>
  } else {
    navRightLis = [
      <li className="nav-demologin-a" key={0} onClick={() => demoUserLogin(demoUser)}>Demo Login</li>,
      <li className="nav-login" key={1}><Link to="/login">Log in</Link></li>,
      <li className="nav-signup" key={2}><Link to="/signup">Sign up</Link></li>
    ];
  };

  return (
    <ul className="nav-right">
      {navRightLis}
    </ul>
  );
};

export default NavBarRight;