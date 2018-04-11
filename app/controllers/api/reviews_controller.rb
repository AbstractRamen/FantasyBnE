class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :lat,
      :lng,
      :description,
      :name,
      :user_id,
      :picture_url,
      :address,
      :image,
      :reviews
    )
  end

end
