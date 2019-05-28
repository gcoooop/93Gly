import React from "react";
import PostEditFormContainer from "../posts/edit/edit_post_form_container";

class Manage extends React.Component {
  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.currentUserId);
  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.openModal("CreatePostFormContainer")}>Upload to Profile</div>
        <PostEditFormContainer /> 
      </div>
    );
  }
}

export default Manage;