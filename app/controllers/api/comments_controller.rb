class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show]
  before_action :set_concert, only: [:index, :create]

  def index
    render json: @concert.comments, status: 200
  end

  def create
    @comment = @concert.comments.build(comment_params)
    if @comment.save
      render json: @comment, status: 201
    else
      render json: {message: @comment.errors}, status: 422
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_concert
    @concert = Concert.find(params[:concert_id])
  end

  def comment_params
    params.require(:comment).permit(:content, :concert_id)
  end
end
