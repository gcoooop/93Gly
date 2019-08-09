json.set! comment.id do
  json.comment do
    json.extract! comment, :id, :body
    json.authorId comment.author_id
    json.author comment.author.username
    json.postId comment.post_id
    json.replyIds comment.reply_ids
    json.createdAt comment.created_at
  end

  json.user do 
    json.extract! comment.author, :id, :username
    json.postIds comment.author.post_ids
  end
end