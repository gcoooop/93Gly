import React from "react";
import PostIndexContainer from "../posts/post_index_container"

const Manage = props => {
  return (
    <div>
      <aside></aside>
      <PostIndexContainer />
      <PostEditForm />
    </div>
  );
}

export default Manage;