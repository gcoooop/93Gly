import React from "react";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post, uploadStatus: this.props.uploadStatus };
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
        <div className="image-uploader">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <input type="file" onChange={this.updateFileInput} />
        </div>
      );

    } else if (uploadStatus === "processing") {
      return (
        <div className="image-uploader">
          Processing...
        </div>
      );

    } else if (uploadStatus === "loaded") {
      return (
        <div className="image-uploader">
          <form className="post-form">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
            <label>Title</label>
            <input type="text" value={post.title} onChange={this.updateInput("title")}/>
            <label>Caption</label>
            <input type="text" value={post.caption} onChange={this.updateInput("caption")}/>
            <img src={post.imageUrl}/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );

    } else if (uploadStatus === "publishing") {
      return (
        <div className="image-uploader">
          <h1>Publishing...</h1>
        </div>
      );
    } else if (uploadStatus === "editing") {
      return (
        <div className="image-editor">

        </div>
      );
    }

  }
}

export default PostForm;