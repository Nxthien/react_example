Rails.application.routes.draw do
  root 'dashboard#index'
  resources :events, only: [:index, :create, :destroy, :update ] do
    get :search, on: :collection
  end
end
