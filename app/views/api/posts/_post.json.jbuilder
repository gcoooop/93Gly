json.extract! post, :id, :title, :caption
json.photographerId post.photographer_id
json.photoUrl url_for(post.photo)
json.commentIds post.comment_ids
json.likeIds post.like_ids