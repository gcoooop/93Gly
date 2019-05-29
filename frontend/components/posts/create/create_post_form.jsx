import React from "react";
import Dropzone from "react-dropzone";
import CreatePostItem from "./create_post_item";

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedPost: { idx: "", title: "", caption: "", photoUrl: "", photoFile: "" }, 
      uploadedPostsCount: 1,
      uploadStatus: "waiting" 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateFileInput = this.updateFileInput.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.removeUpload = this.removeUpload.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (Object.keys(prevProps.uploadedPosts).length === 1 && Object.keys(this.props.uploadedPosts).length === 0) {
      this.setState({ uploadStatus: "waiting"});
    }
  }

  closeWindow(event) {
    this.props.clearUploadedPostEntities();
    this.props.closeModal();
  }

  removeUpload(postIdx) {
    return event => {
      this.props.deleteUploadedPostEntity(postIdx);
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ uploadStatus: "publishing" });
    
    Object.values(this.props.uploadedPosts).forEach( (post, idx) => {
      const formData = new FormData();
      formData.append("post[title]", post.title);
      formData.append("post[caption]", post.caption);
      if (post.photoFile) {
        formData.append("post[photo]", post.photoFile);
      }
      if (idx < Object.keys(this.props.uploadedPosts).length - 1)
        this.props.processForm(formData);
      else {
        this.props.processForm(formData)
          .then(() => this.props.closeModal());
      }
    });
  }

  updateInput(field) {
    return event => {
      const { selectedPost } = this.state;
      const currentState = selectedPost;
      currentState[field] = event.target.value;
      this.setState({ selectedPost: currentState });
    };
  }

  updateFileInput(files) {
    this.setState({ uploadStatus: "processing" });
    files.forEach( file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.props.createUploadedPostEntity({ 
          photoUrl: reader.result, 
          photoFile: file, 
          idx: this.state.uploadedPostsCount, 
          title: "", 
          caption: "" 
        });
        const { uploadedPosts } = this.props;
        this.setState({ 
          selectedPost: uploadedPosts[this.state.uploadedPostsCount], 
          uploadedPostsCount: this.state.uploadedPostsCount + 1
        });
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        console.log("ERROR CREATE_POST_FORM IN UPDATEFILEINPUT");
      }
    });
    this.setState({ uploadStatus: "loaded" })
  }

  updateSelection(post) {
    return event => {
      if (this.state.selectedPost.idx) {
        if (this.state.selectedPost.idx === post.idx) {
          const defaultState = { idx: "", title: "", caption: "", photoUrl: "", photoFile: "" };
          this.setState({ selectedPost: defaultState });
        } else {
          this.setState({ selectedPost: post });
        }
      } else {
        this.setState({ selectedPost: post });
      }
    }
  }

  render() {
    const { uploadStatus } = this.state;
    const promptText = this.state.uploadStatus === "waiting" ? (
      <div className="prompt-text">
        <a>Select Photos</a>
        <p>Or drag &amp; drop photos anywhere on this page</p>
      </div>
    ) : (
      <div className="prompt-text">
        <img/>
        <p>Add more photos</p>
      </div>
    )
    const dropzoneEle = (
      <Dropzone onDrop={this.updateFileInput}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              {promptText}
            </div>
          </section>
        )}
      </Dropzone>
    );


    if (uploadStatus === "waiting") {
      return (
        <div className="post-uploader waiting">
          {dropzoneEle}
        </div>
      );

    } else if (uploadStatus === "processing") {
      return (
        <div className="post-uploader processing">
          Uploading...
        </div>
      );

    } else if (uploadStatus === "loaded") {
      const createPostItems = Object.values(this.props.uploadedPosts).map( post => 
        <CreatePostItem 
          key={post.idx}
          post={post} 
          selected={ post.idx === this.state.selectedPost.idx ? "selected" : ""} 
          removeUpload={this.removeUpload(post.idx)}
          updateSelection={this.updateSelection(post)}
        /> 
      );
      return (
        <div className="post-uploader loaded">
          <ul className="post-uploader-list">
            {createPostItems}
            <li className="post-uploader-list-item dropzone-item">{dropzoneEle}</li>
          </ul>
          <div className="form-wrapper">
            <form className="post-form">
              <label>Title</label>
              <input type="text" value={this.state.selectedPost.title} onChange={this.updateInput("title")}/>
              <label>Caption</label>
              <input type="text" value={this.state.selectedPost.caption} onChange={this.updateInput("caption")}/>
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
          <div onClick={this.closeWindow} className="close-x">&times;</div>
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