class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(
      :lat,
      :lng,
      :description,
      :owner_id,
      :picture_url
      :address
    )
  end

end
