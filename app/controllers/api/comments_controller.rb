class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    render json: Comment.all
  end


  def create
    concert = Concert.find(params[:comment][:concert_id])
    comment = concert.comments.build(comment_params)
    if comment.save
      render json: comment
    else
      render json: { message: 'Unsuccessful attempt. Please try again.' }, status: 400
    end
  end


  def show
    render json: @comment
  end



  def update

    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {message: 'Comment did not update. Try again.'}, status: 400
    end
  end

  def destroy
    if @comment.destroy
      render json: { message: 'Successfully Removed Concert' }, status: 204
    else
      render json: {message: "Unable to delete. Try again."}, status: 400
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :concert_id)
  end

end
