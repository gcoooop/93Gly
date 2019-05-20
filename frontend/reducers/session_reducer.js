import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const nullSession = {
  currentUserId: null
};

const SessionReducer = (state = nullSession , action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const userSession = { currentUserId: action.currentUser.id }
      return Object.assign({}, state, userSession);

    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, nullSession);

    default:
      return state;
  };
};

export default SessionReducer;