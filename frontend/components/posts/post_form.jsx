import React from "react";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  updateInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    return (
      <form>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={this.updateInput("title")}/>
        <label>Caption</label>
        <input type="text" value={this.state.caption} onChange={this.updateInput("caption")}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(PostForm);