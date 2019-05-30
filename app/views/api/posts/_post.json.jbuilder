json.set! post.id do
  json.extract! post, :id, :title, :caption
  json.photographerId post.photographer_id
  json.photoUrl url_for(post.photo)
end