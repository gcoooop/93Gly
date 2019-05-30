import React from "react";
import PostEditFormContainer from "../posts/edit/edit_post_form_container";

class Manage extends React.Component {
  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchPostsByIds(this.props.currentUserPostIds);
  }

  render() {
    return (
      <div className="manage-pane">
        <div className="manage-pane-left">
          <div className="top">
            <button onClick={() => this.props.openModal("CreatePostFormContainer")}>Upload to Profile</button>
          </div>
          <aside className="sources">
            <h3>PHOTOS</h3>
            <ul className="library-sources">
              <li>All Photos<span>{this.props.postCount}</span></li>
              <li>Public<span>{this.props.postCount}</span></li>
              <li>Licensing<span>0</span></li>
            </ul>
          </aside>
        </div>
        <PostEditFormContainer /> 
      </div>
    );
  }
}

export default Manage;