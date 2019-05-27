import React from "react";
import CreatePostItem from "./create_post_item";

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPost: { title: "", caption: "", photoUrl: "", photoFile: "" }, uploadStatus: "waiting" };

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
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.post.photoFile);
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
    let that = this;
    return event => {
      that.setState({ selectedPost: {[field]: event.target.value} });
    };
  }

  updateFileInput(event) {
    this.setState({ uploadStatus: "processing" });
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.props.createUploadedPostEntity({ photoUrl: reader.result, photoFile: file, title: "", caption: "" });
      const { uploadedPosts } = this.props;
      this.setState({ selectedPost: uploadedPosts[uploadedPosts.length - 1], uploadStatus: "loaded" });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      console.log("ERROR CREATE_POST_FORM IN UPDATEFILEINPUT");
    }
  }

  updateSelection(post) {
    return event => {
      if (this.state.selectedPost) {
        this.props.updateUploadedPostEntity(this.state.selectedPost);
        if (this.state.selectedPost === post) {
          this.setState({ selectedPost: null });
        } else {
          this.setState({ selectedPost: post });
        }
      } else {
        this.setState({ selectedPost: post });
      }
    }
  }

  render() {
    const { uploadStatus, selectedPost } = this.state;
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
      const createPostItems = this.props.uploadedPosts.map( (post, idx) => 
        <CreatePostItem 
          key={idx}
          index={idx}
          post={post} 
          selected={ post === this.state.selectedPost ? "selected" : ""} 
          updateSelection={this.updateSelection(post)}
        /> 
      );
      return (
        <div className="post-uploader">
          {createPostItems}
          <input type="file" onChange={this.updateFileInput} />
          <div className="form-wrapper">
            <form className="post-form">
              <label>Title</label>
              <input type="text" value={this.state.selectedPost.title || ""} onChange={this.updateInput("title")}/>
              <label>Caption</label>
              <input type="text" value={this.state.selectedPost.caption || ""} onChange={this.updateInput("caption")}/>
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
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