class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.where(listing_id: params[:listing_id])
    render :index
  end

  # def index
  #   @reviews = Listing.find(params[:id]).reviews
  #   render :index
  # end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :body,
      :user_id,
      :reviews,
      :listing_id,
      :author_id
    )
  end

end
