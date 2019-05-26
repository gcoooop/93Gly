import React from "react";
import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from "../../actions/post_actions";

// class EditPostForm extends React.Component {
//   constructor
//   render() {

//   }
// }

const mstp = state => {
  return {
    posts: state.ui.selectedPosts, 
    uploadStatus: "editing"
  };
};

const mdtp = dispatch => {
  return {
    processForm: post => dispatch(updatePost(post))
  };
};

export default connect(mstp, mdtp)(PostForm);