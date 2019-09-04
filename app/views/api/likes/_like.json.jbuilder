json.like do
  json.extract! like, :id
  json.postId like.post_id
  json.userId like.user_id
end

json.user do
  json.partial! "api/users/user", user: like.user
end