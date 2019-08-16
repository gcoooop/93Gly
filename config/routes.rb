Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :posts do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:index, :create]
    end
    resources :comments, only: [:update, :destroy]
    resources :likes, only: [:destroy]
  end

end
