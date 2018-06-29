Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do


   resources :concerts
   resources :comments
end

   resources :concerts  do
     resources :comments, :only => [:new, :create, :show, :index, :update]
   end
 


end
