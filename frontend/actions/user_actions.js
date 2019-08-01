import * as UserApiUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = id => {
  return dispatch => {
    return UserApiUtil.fetchUser(id)
      .then( user => dispatch(receiveUser(user)) );
  };
};