import React from "react";
import PostIndexContainer from "../posts/post_index_container";
import PostEditFormContainer from "../posts/edit_post_form_container";

class Manage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div onClick={() => this.props.openModal("CreatePostFormContainer")}>Upload to Profile</div>
        <aside></aside>
        <PostIndexContainer /> {/* pass in function as props to get selected elements to store in state? */}
        <PostEditFormContainer /> 
      </div>
    );
  }
}

export default Manage;