Rails.application.routes.draw do
  root 'books#index'
  resources :books
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :books
    end
  end
end
