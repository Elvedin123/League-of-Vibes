class TeamsController < ApplicationController
  before_action :set_team, only: %i[ show update destroy ]
  before_action :authorize_request, only:[:create, :update, :destroy]
def index
  @teams = Team.all
  render json: @teams
end
def show
render json: @team, include: :comments
end

def get_user_teams
  @user = User.find(params[:user_id])
  render json: @user.teams
end
  def create
    @team = Team.new(team_params)
    @team.user = @current_user
    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end
  def update 
    @team.update(team_params)

    render json: @team
  end
def destroy
  @team.destroy
  render json: @team
end

  private 
  def set_team
    @team = Team.find(params[:id])
  end
  def team_params
    params.require(:team).permit( :champ1_img, :champ2_img, :champ3_img, :champ4_img, :champ5_img, :description, :user_id)
  end
end
