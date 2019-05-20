json.users do 
  @users.each do |user|
    json.partial! "api/users/users", user: user
  end
end