import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = props => {
  return (
    <div className={`post-grid-item ${props.selected}`}>
      <Link to={`/posts/${props.post.id}`}>
        <img src={props.post.photoUrl}/>
      </Link>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default PostIndexItem;