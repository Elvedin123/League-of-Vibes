class UsersController < ApplicationController
  before_action :authorize_request, only:[:update, :destroy]
  before_action :set_user, only: %i[ show update destroy ]
  def index
    @users = User.all

    render json: @users
  end
  def show 
    render json: @user, include: :teams
  end
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
  end
  def update 
    @user.update(user_params)

      render json: @user
  end
  def destroy
    @user.destroy
    render json:@user
  end
  private 
  def set_user
    @user = User.find(params[:id])
  end
  def user_params
    params.require(:user).permit( :username, :first_name, :last_name, :img_url, :email, :password )
  end
end
