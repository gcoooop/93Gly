export const fetchLikesByPostId = postId => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/likes`
  });
};

export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${like.postId}/likes`,
    data: { like }
  });
};

export const deleteLike = like => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${like.id}`
  });
};