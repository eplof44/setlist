class Api::ConcertsController < ApplicationController
  before_action :set_concert, only: [:show, :update, :destroy]


  def index
    render json: Concert.all
  end

  def create
    concert = Concert.new(concert_params)
    if concert.save
      render json: concert
    else
      render json: { message :'There was an issue adding this concert.' }, status: 400
  end

  def show
    render json: @concert
  end

  def update
    if @concert.update(concert_params)
      render json: @concert
    else
      render json: { message :'There was an issue updating this concert.' }, status: 400
  end

  def destroy
    if @concert.destroy
      render json: { message: 'Successfully Removed Concert' }, status: 204
    else
      render json: { message: 'Unable to Delete'}, status: 400
    end
  end

  
  private

  def set_concert
  end

  def concert_params
  end

end
