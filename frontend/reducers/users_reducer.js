import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENTS } from "../actions/comment_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = { [action.currentUser.id]: action.currentUser };
      return Object.assign({}, state, currentUser);
  
    case RECEIVE_USER:
      const receivedUser = { [action.user.id]: action.user };
      return Object.assign({}, state, receivedUser);
      
    case RECEIVE_POST:
      return Object.assign({}, state, action.payload.user)

    case RECEIVE_COMMENTS:
      const users = {};
      Object.values(action.payload).forEach( val => users[val.user.id] = val.user );
      return Object.assign({}, state, users);

    default:
      return state;
  };
};

export default UsersReducer;