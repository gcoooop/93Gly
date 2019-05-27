import { CREATE_UPLOADED_POST_ENTITY, UPDATE_UPLOADED_POST_ENTITY, DELETE_UPLOADED_POST_ENTITY } from "../actions/post_actions";

const UploadedPostReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case CREATE_UPLOADED_POST_ENTITY:
      return state.concat(action.post);

    case UPDATE_UPLOADED_POST_ENTITY:
      

    case DELETE_UPLOADED_POST_ENTITY:
    

    default:
      return state;
  }
};

export default UploadedPostReducer;