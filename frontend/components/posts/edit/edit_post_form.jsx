import React from "react";
import EditPostItem from "./edit_post_item";

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, title: "", caption: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.makeSelection = this.makeSelection.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deletePost(this.state.id);
    this.setState({ id: null, title: "", caption: "" });
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }
  
  clearSelection(event) {
    event.preventDefault();
    if (event.target.className === "manage-pane-middle" || event.target.className === "posts-grid-editor" || event.target.className === "cancel-button") {
      this.setState({ id: null, title: "", caption: "" });
    }
  }

  makeSelection(post) {
    return event => {
      if (this.state.id !== post.id) {
        this.setState( post );
      }
    };
  }

  render() {
    const editPostItems = this.props.posts.map( post => 
      <EditPostItem 
        key={post.id}
        post={post} 
        selected={ post.id === this.state.id ? "selected" : ""} 
        makeSelection={this.makeSelection(post)}
      /> 
    );

    let editHeader;
    if (this.state.id) {
      editHeader = <h2>Editing A Photo</h2>
    } else {
      editHeader = <h2 style={{color:"#c5c5c5"}}>Edit</h2>
    }

    return (
      <div className="post-editor" onClick={this.clearSelection}>
        <div className="manage-pane-middle">
          <div className="top-bar">
            <h2>Public <span>{editPostItems.length} Photos</span></h2>
          </div>
          <div className="posts-grid-editor">
            {editPostItems}
          </div>
        </div>

        <div className="form-wrapper manage-pane-right">
          {editHeader}
          <form className="post-form">
            <fieldset disabled={!this.state.id}>
              <div className="input-fields">
                <label>Title</label>
                <textarea type="text" value={this.state.title} onChange={this.updateInput("title")}/>
                <label>Caption</label>
                <textarea type="text" value={this.state.caption} onChange={this.updateInput("caption")}/>
                <button className="delete-button" onClick={this.handleDelete}>Delete Post</button>
              </div>
              <div className="form-controls">
                <button className="cancel-button" onClick={this.clearSelection}>Cancel</button>
                <button className="save-button" onClick={this.handleSubmit}>Save</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPostForm;