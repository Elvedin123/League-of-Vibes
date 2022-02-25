class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  private 
  def user_params
    params.require(:user).permit( :username, :email, :password )
  end
end
