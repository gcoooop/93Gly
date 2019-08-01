Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :posts
  end

end
