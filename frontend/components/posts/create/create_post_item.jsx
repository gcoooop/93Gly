import React from "react";

const CreatePostItem = props => {
  const styles = {
    backgroundImage: `url(${props.post.photoUrl})`
  };
  return (
    <div className={`post-grid-item-create ${props.selected}`} onClick={props.updateSelection} style={styles}>
      <div className="item-top item-info">
        <div onClick={props.removeUpload} className="close-x-item">&times;</div>
      </div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default CreatePostItem;