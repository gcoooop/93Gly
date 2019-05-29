import React from "react";
import EditPostItem from "./edit_post_item";

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null, title: "", caption: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
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

  updateSelection(post) {
    return event => {
      if (this.state.id === post.id) {
        this.setState({ id: null, title: "", caption: "" });
      } else {
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
        updateSelection={this.updateSelection(post)}
      /> 
    );
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
          <h2>Editing A Photo</h2>
          <form className="post-form">
            <label>Title</label>
            <textarea type="text" value={this.state.title} onChange={this.updateInput("title")} disabled={!this.state.id}/>
            <label>Caption</label>
            <textarea type="text" value={this.state.caption} onChange={this.updateInput("caption")} disabled={!this.state.id}/>
            <button onClick={this.handleSubmit} disabled={!this.state.id}>Submit</button>
            <div className="form-controls">
              <button className="cancel-button" onClick={this.clearSelection} disabled={!this.state.id}>Cancel</button>
              <button onClick={this.handleDelete} disabled={!this.state.id}>Delete Post</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPostForm;