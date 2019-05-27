import * as PostApiUtil from "../util/post_util";

export const RECEIEVE_POSTS = "RECEIEVE_POSTS";
export const RECEIEVE_POST = "RECEIEVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST_ENTITY = "UPDATE_POST_ENTITY";

export const receivePosts = posts => {
  return {
    type: RECEIEVE_POSTS,
    posts
  };
};

export const receivePost = post => {
  return {
    type: RECEIEVE_POST,
    post
  };
};

export const removePost = post => {
  return {
    type: REMOVE_POST,
    postId: post.id
  };
};

export const updatePostEntity = post => {
  return {
    type: UPDATE_POST_ENTITY,
    post
  };
};


export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts()
      .then( posts => dispatch(receivePosts(posts)) );
  };
};

export const fetchPost = id => {
  return dispatch => {
    return PostApiUtil.fetchPost(id)
      .then( post => dispatch(receivePost(post)) );
  };
};

export const createPost = post => {
  return dispatch => {
    return PostApiUtil.createPost(post)
      .then( post => dispatch(receivePost(post)) );
  };
};

export const updatePost = post => {
  return dispatch => {
    return PostApiUtil.updatePost(post)
      .then( post => dispatch(receivePost(post)) );
  };
};

export const deletePost = id => {
  return dispatch => {
    return PostApiUtil.deletePost(id)
      .then( post => dispatch(removePost(post)) );
  };
};