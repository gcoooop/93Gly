import React from "react";

const PostFormEdit = props => {
  return (
    <div className="post-editor">
      <form className="post-form">
        <label>Title</label>
        <input type="text" value={"titleValue"} onChange={props.updateInput("title")}/>
        <label>Caption</label>
        <input type="text" value={"captionValue"} onChange={props.updateInput("caption")}/>
        <button onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default PostFormEdit;