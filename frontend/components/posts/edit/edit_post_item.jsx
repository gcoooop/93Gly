import React from "react";

const EditPostItem = (props) => {
  // const img = new Image();
  // img.src = props.post.photoUrl;
  // const imgW = img.width; 
  // const imgH = img.height; 
  // const calcW = 200 * imgW / imgH;
  const styles = {
    backgroundImage: `url(${props.post.photoUrl})`,
  //   flexGrow: 1,
  //   flexShrink: 0,
  //   flexBasis: `${calcW}px`,
    // maxHeight: `calc`
  };
  return (
    <div className={`post-grid-item-editor ${props.selected}`} onClick={props.updateSelection} style={ styles }>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
} 

export default EditPostItem;