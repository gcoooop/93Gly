import React from "react";
import { Link, withRouter } from "react-router-dom";

const PostIndexItem = props => {
  const photoEle = props.location.pathname === "/manage" ? (
    <img src={props.post.photoUrl} onClick={props.toggleSelected} />
  ) : (
    <Link to={`/posts/${props.post.id}`}>
      <img src={props.post.photoUrl}/>
    </Link>
  );
  return (
    <div className={`post-grid-item ${props.selected}`}>
      {photoEle}
      <div className="item-top item-info"></div>
      <div className="item-bottom item-info"></div>
    </div>
  );
};

export default withRouter(PostIndexItem);