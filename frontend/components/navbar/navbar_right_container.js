import { connect } from "react-redux";
import NavBarRight from "./navbar_right";
import { logout, login } from "../../actions/session_actions";

const mstp = state => {
  return {
    currentUser: state.entities.users[state.session.currentUserId]
  };
};

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    demoUserLogin: (demoUser) => dispatch(login(demoUser))
  };
};

export default connect(mstp, mdtp)(NavBarRight);