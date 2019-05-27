import React from "react";
import PostFormEditPane from "./post_form_edit_pane";

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], uploadStatus: "waiting" };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateFileInput = this.updateFileInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ uploadStatus: "publishing" });
    const formData = new FormData();

    formData.append("post[title]", this.state.post.title);
    formData.append("post[caption]", this.state.post.caption);
    if (this.state.imageFile) {
      formData.append("post[photo]", this.state.post.imageFile);
    }

    $.ajax({
      method: "POST",
      url: "/api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then(
      () => this.props.closeModal()
    );
  }

  updateInput(field) {
    return event => {
      this.setState({ ["post"[field]]: event.target.value });
    };
  }

  updateFileInput(event) {
    this.setState({ uploadStatus: "processing" });
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => 
      this.setState({ ["post"[imageUrl]]: reader.result, ["post"[imageFile]]: file, uploadStatus: "loaded" });
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ ["post"[imageUrl]]: "", ["post"[imageFile]]: null });
    }
  }

  render() {
    const { uploadStatus, post } = this.state;
    if (uploadStatus === "waiting") {
      return (
        <div className="post-uploader">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <input type="file" onChange={this.updateFileInput} />
        </div>
      );

    } else if (uploadStatus === "processing") {
      return (
        <div className="post-uploader">
          Processing...
        </div>
      );

    } else if (uploadStatus === "loaded") {
      return (
        <div className="post-uploader">
          <img src={post.imageUrl}/>
          <PostFormEditPane posts={this.props.post} updateInput={this.updateInput} handleSubmit={this.handleSubmit}/>
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
        </div>
      );

    } else if (uploadStatus === "publishing") {
      return (
        <div className="post-uploader">
          <h1>Publishing...</h1>
        </div>
      );
    }
  }
}

export default CreatePostForm;