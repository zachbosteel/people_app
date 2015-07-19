Rails.application.routes.draw do
  root 'pages#index'
  get '/shopping' => 'pages#shopping'
end
