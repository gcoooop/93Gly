import React from "react";
import PostFormEditPane from "./post_form_edit_pane";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ uploadStatus: "publishing" });
    const formData = new FormData();
    formData.append("post[title]", this.state.post.title);
    formData.append("post[caption]", this.state.post.caption);

    this.props.posts.forEach( postId => {
      $.ajax({
        method: "PATCH",
        url: `/api/posts/${postId}`,
        data: formData,
        contentType: false,
        processData: false
      });
    });
  }

  updateInput(field) {
    return event => {
      this.setState({ ["post"[field]]: event.target.value });
    };
  }

  render() {
    debugger
    const { posts } = this.state;
    return (
      <PostFormEditPane posts={this.props.post} updateInput={this.updateInput} handleSubmit={this.handleSubmit}/>
    );
  }
}

export default PostForm;