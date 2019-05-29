import React from "react";

const EditPostItem = (props) => {
  const styles = {
    backgroundImage: `url(${props.post.photoUrl})`
  };
  return (
    <div className={`post-grid-item-editor ${props.selected}`} onClick={props.makeSelection} style={ styles }>
      <div className="selected-icon"></div>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
} 

export default EditPostItem;