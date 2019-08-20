json.set! like.id do
  json.like do
    json.extract! like, :id, :post_id, :user_id
  end

  json.user do
    json.partial! "api/users/user", user: like.user
  end
end