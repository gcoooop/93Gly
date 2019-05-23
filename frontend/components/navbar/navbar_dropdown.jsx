import React from "react";

class NavBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showType: "hidden" };
  }

  toggleShow() {
    const showType = (this.state.showType === "hidden" ? "active" : "hidden");
    this.setState({ showType });
  }

  render() {
    const { logout } = this.props;
    return (
      <ul className={`nav-right-dropdown ${this.state.showType}`}>
        <li onClick={logout}>Log Out</li>
      </ul>
    );
  }
};

export default NavBarDropdown;