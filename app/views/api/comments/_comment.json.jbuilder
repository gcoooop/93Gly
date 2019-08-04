json.set! comment.id do
  json.comment do
    json.extract! comment, :id, :body
    json.authorId comment.author_id
    json.postId comment.post_id
  end

  json.user do 
    json.extract! comment.author, :id, :username
    json.postIds comment.author.post_ids
  end
end