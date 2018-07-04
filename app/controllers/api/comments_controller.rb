class Api::CommentsController < ApplicationController
  before_action :set_comment


  def index
    render json: Comment.all, status: 200
  end

  def show
    render json: @comment, status: 200
  end

  def create

      @comment = Comment.new
      @comment.content = params[:content]
      @comment.concert_id = params[:concert_id]

      if @comment.save
        render json: @comment
      else
        render :new
      end
    end

  private

  def set_comment
    @comment = Comment.find_by(id:params[:id])
  end

  def comment_params
    params.require(:comment).permit(:concert_id, :content)
  end
end
