import * as PostApiUtil from "../util/post_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CREATE_UPLOADED_POST_ENTITY = "CREATE_UPLOADED_POST_ENTITY";
export const DELETE_UPLOADED_POST_ENTITY = "DELETE_UPLOADED_POST_ENTITY";
export const CLEAR_UPLOADED_POST_ENTITIES = "CLEAR_UPLOADED_POST_ENTITIES";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

export const receivePost = payload => {
  return {
    type: RECEIVE_POST,
    payload
  };
};

export const removePost = payload => {
  const { post } = payload;
  return {
    type: REMOVE_POST,
    postId: post.id
  };
};

export const createUploadedPostEntity = post => {
  return {
    type: CREATE_UPLOADED_POST_ENTITY,
    post
  };
};


export const deleteUploadedPostEntity = postIdx => {
  return {
    type: DELETE_UPLOADED_POST_ENTITY,
    postIdx
  };
};

export const clearUploadedPostEntities = () => {
  return {
    type: CLEAR_UPLOADED_POST_ENTITIES
  };
};

export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts()
      .then( posts => dispatch(receivePosts(posts)) );
  };
};

export const fetchPostsByIds = postIds => {
  return dispatch => {
    return PostApiUtil.fetchPostsByIds(postIds)
      .then( posts => dispatch(receivePosts(posts)) );
  };
};

export const fetchPost = id => {
  return dispatch => {
    return PostApiUtil.fetchPost(id)
      .then( 
        post => dispatch(receivePost(post)),
        errors => dispatch(receiveErrors(errors.responseJSON))
       );
  };
};

export const createPost = post => {
  return dispatch => {
    return PostApiUtil.createPost(post)
    .then( 
      post => dispatch(receivePost(post)),
      errors => dispatch(receiveErrors(errors.responseJSON))
     );
  };
};

export const updatePost = post => {
  return dispatch => {
    return PostApiUtil.updatePost(post)
    .then( 
      post => dispatch(receivePost(post)),
      errors => dispatch(receiveErrors(errors.responseJSON))
     );
  };
};

export const deletePost = id => {
  return dispatch => {
    return PostApiUtil.deletePost(id)
    .then( 
      post => dispatch(removePost(post)),
      errors => dispatch(receiveErrors(errors.responseJSON))
     );
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

export const clearPostErrors = () => {
  return {
    type: CLEAR_POST_ERRORS
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};