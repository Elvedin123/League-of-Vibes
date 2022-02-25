class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]
  def index 
   @team = Team.find(params[:team_id])
   @comments = @team.comments

   render json: @comments, include: :user
  end

  def get_all_comments
    @comments = Comment.all
    
    render json: @comments
  end

  def show
    render json: @comment
  end
  def create 
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.team_id = params[:team_id]

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end
def update
@comment.update(comment_params)

render json: @comment
end
def destroy
  @comment.destroy

  render json: @comment
end

  private
  def set_comment
    @comment = Comment.find(params[:id])
  end
  def comment_params
    params.require(:comment).permit(:content, :user_id, :team_id)
  end
end
