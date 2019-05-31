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
    this.removeUpload = this.removeUpload.bind(this);
    this.makeSelection = this.makeSelection.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (Object.keys(prevProps.uploadedPosts).length === 1 && Object.keys(this.props.uploadedPosts).length === 0) {
      this.setState({ uploadStatus: "waiting"});
    }
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
    const getTitleFromFile = fileName => {
      const noExt = fileName.slice(0, fileName.lastIndexOf("."));
      const validChars = /[a-z0-9]/;
      let titleGuess = "";
      noExt.split("").forEach( char => {
        if (validChars.test(char)) {
          titleGuess += char;
        } else {
          titleGuess += " ";
        }
      });
      return titleGuess;
    };
    this.setState({ uploadStatus: "processing" });
    files.forEach( (file, n) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.props.createUploadedPostEntity({ 
          photoUrl: reader.result, 
          photoFile: file, 
          idx: this.state.uploadedPostsCount, 
          title: getTitleFromFile(file.name), 
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
      if (n === files.length - 1) {
        this.setState({ uploadStatus: "loaded" });
      }
    });
  }

  clearSelection(event) {
    if (event.target.className === "post-uploader-list" || event.target.className === "post-uploader-list-wrapper") {
      const defaultState = { idx: "", title: "", caption: "", photoUrl: "", photoFile: "" };
      this.setState({ selectedPost: defaultState });
    }
  }

  makeSelection(post) {
    return event => {
      if (this.state.selectedPost.idx !== post.idx) {
        this.setState({ selectedPost: post });
      }
    };
  }

  render() {
    const { uploadStatus } = this.state;
    const postsToPublishCount = Object.keys(this.props.uploadedPosts).length;
    let editHeader;
    if (this.state.selectedPost.idx) {
      editHeader = <h2>Editing A Photo</h2>
    } else {
      editHeader = <h2 style={{color:"#c5c5c5"}}>Edit</h2>
    }
    const promptText = this.state.uploadStatus === "waiting" ? (
      <div className="prompt-text">
        <a>Select Photos</a>
        <p>Or drag &amp; drop photos anywhere on this page</p>
      </div>
    ) : (
      <div className="prompt-text">
        <a>+</a>
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
        <li key={post.idx}>
          <CreatePostItem 
            post={post} 
            selected={ post.idx === this.state.selectedPost.idx ? "selected" : ""} 
            removeUpload={this.removeUpload(post.idx)}
            makeSelection={this.makeSelection(post).bind(this)}
          /> 
          <input type="text" value={post.title} onMouseDown={this.makeSelection(post)} onChange={this.updateInput("title")}/>
        </li>
      );
      return (
        <div className="post-uploader loaded" onMouseDown={this.clearSelection}>
          <div className="post-uploader-list-wrapper">
            <ul className="post-uploader-list">
              {createPostItems}
              <li className="post-uploader-list-item dropzone-item">{dropzoneEle}</li>
            </ul>
          </div>
          <div className="form-wrapper">
            <form className="post-form">
              <div className="top">
                <button className="submit-button" disabled={false} onClick={this.handleSubmit}>Submit</button>
                <span>
                  {postsToPublishCount === 1 ? "1 post " : `${postsToPublishCount} posts ` } 
                  to publish
                </span>
              </div>
              <fieldset disabled={!this.state.selectedPost.idx}>
                {editHeader}
                <div className="input-fields">
                  <label>Title</label>
                  <textarea type="text" value={this.state.selectedPost.title} onChange={this.updateInput("title")}/>
                  <label>Caption</label>
                  <textarea type="text" value={this.state.selectedPost.caption} onChange={this.updateInput("caption")}/>
                  </div>
              </fieldset>
            </form>
          </div>
        </div>
      );

    } else if (uploadStatus === "publishing") {
      return (
        <div className="post-uploader publishing">
          <h1>Publishing...</h1>
        </div>
      );
    }
  }
}

export default CreatePostForm;