Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  resources :users do 
    resources :teams do 
      resources :comments 
    end
  end

  resources :teams do
    resources :comments
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  get '/users/:user_id/teams', to: 'teams#get_user_teams'
get'/comments', to: 'comments#get_all_comments'
  
end
