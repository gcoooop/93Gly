import React from "react";

const EditPostItem = (props) => {
  return (
    <div className={`post-grid-item ${props.selected}`} onClick={props.updateSelection} style={ {backgroundImage: props.post.photoUrl} }>
      {/* <img src={props.post.photoUrl} onClick={props.updateSelection}/> */}
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
} 

export default EditPostItem;