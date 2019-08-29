import React from "react";

const LikeIndexItem = props => {
  return (
    <li className="like-index-list-item-container">
      <div className="like-index-list-item">
        <span className="like-index-list-item-username">{props.like.username}</span>
      </div>
    </li>
  );
};

export default LikeIndexItem;