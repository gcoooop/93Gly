json.extract! post, :id, :title, :caption
json.photoUrl url_for(post.photo)