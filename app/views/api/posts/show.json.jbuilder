json.post do
  json.partial! "api/posts/post", post: @post
end

json.user do 
  json.set! @post.photographer.id do
    json.extract! @post.photographer, :id, :username
    json.postIds @post.photographer.post_ids
  end
end