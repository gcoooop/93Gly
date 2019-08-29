import React from "react";
import LikeIndexItem from "./like_index_item";

const LikeIndex = props => {
  const likeLis = props.likes.map( like => <LikeIndexItem key={like.id} like={like} />)  

  return (
    <div className="like-index-container">
      <div className="likes-index-header">
        <div className="likesindex-header-container">
          <span className="likes-index-header-title">Likes</span>
          <span className="likes-index-header-count">•&nbsp; {props.likes.length}</span>
        </div>
        <div className="likes-index-close" onClick={props.closeModal}><span>&times;</span></div>
      </div>
      <ul className="like-index-list">
        { likeLis }
      </ul>
    </div>
  );
};

export default LikeIndex;