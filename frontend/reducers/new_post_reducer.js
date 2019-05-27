import { CREATE_UPLOADED_POST_ENTITY, DELETE_UPLOADED_POST_ENTITY, CLEAR_UPLOADED_POST_ENTITIES } from "../actions/post_actions";

const UploadedPostReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CREATE_UPLOADED_POST_ENTITY:
      const uploadedPost = { [action.post.idx]: action.post };
      return Object.assign({}, state, uploadedPost);

    case DELETE_UPLOADED_POST_ENTITY:
    
    
    case CLEAR_UPLOADED_POST_ENTITIES:
      return {};

    default:
      return state;
  }
};

export default UploadedPostReducer;