import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = props => {
  const img = new Image();
  img.src = props.post.photoUrl;
  const imgW = img.width; 
  const imgH = img.height; 
  const calcW = 300 * imgW / imgH;
  const styles = {
    backgroundImage: `url(${props.post.photoUrl})`,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: `${calcW}px`,
    // maxWidth: `${calcW}px`
  };
  return (
    <div className="post-grid-item" style={ styles }>
      <Link to={`/posts/${props.post.id}`}>
        {/* <img src={props.post.photoUrl}/> */}
      </Link>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default PostIndexItem;