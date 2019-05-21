import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const receivedUser = { [action.currentUser.id]: action.currentUser }
      return Object.assign({}, state, receivedUser);
  
    default:
      return state;
  };
};

export default UsersReducer;