import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post }) => {
  return (
    <div className="post-grid-item">
      <Link to={`/posts/${post.id}`}>
        {/* <img/> */}
        {post.title}
      </Link>
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default PostIndexItem;