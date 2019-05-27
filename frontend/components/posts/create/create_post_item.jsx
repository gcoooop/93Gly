import React from "react";

const CreatePostItem = props => {
  return (
    <div className={`post-grid-item ${props.selected}`}>
      <img src={props.post.photoUrl} onClick={props.updateSelection}/>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default CreatePostItem;