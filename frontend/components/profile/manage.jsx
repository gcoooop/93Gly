import React from "react";
import PostEditFormContainer from "../posts/edit/edit_post_form_container";

class Manage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
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