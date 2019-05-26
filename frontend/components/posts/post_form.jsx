import React from "react";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post, uploadStatus: "waiting" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateFileInput = this.updateFileInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ uploadStatus: "publishing" });
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[caption]", this.state.caption);
    if (this.state.imageFile) {
      formData.append("post[photo]", this.state.imageFile);
    }
    $.ajax({
      method: "POST",
      url: "/api/posts",
      data: formData,
      contentType: false,
      processData: false
    }).then(
      success => this.props.closeModal()
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
      this.setState({ imageUrl: reader.result, imageFile: file, uploadStatus: "loaded" });
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    if (this.state.uploadStatus === "waiting") {
      return (
        <div className="image-uploader">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          <input type="file" onChange={this.updateFileInput} />
        </div>
      );

    } else if (this.state.uploadStatus === "processing") {
      return (
        <div className="image-uploader">
          Processing...
        </div>
      );

    } else if (this.state.uploadStatus === "loaded") {
      return (
        <div className="image-uploader">
          <form className="post-form">
            <div onClick={this.props.closeModal} className="close-x">&times;</div>
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={this.updateInput("title")}/>
            <label>Caption</label>
            <input type="text" value={this.state.caption} onChange={this.updateInput("caption")}/>
            <img src={this.state.imageUrl}/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );

    } else if (this.state.uploadStatus === "publishing") {
      return (
        <div className="image-uploader">
          <h1>Publishing...</h1>
        </div>
      );
    }

  }
}

export default withRouter(PostForm);