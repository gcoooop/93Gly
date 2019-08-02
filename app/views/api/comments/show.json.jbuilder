json.comment do
  json.partial! "api/comments/comment", comment: comment
end

json.user do 
  json.set @comment.author.id do 
    json.extract! @comment.author, :id, :username
  end
end