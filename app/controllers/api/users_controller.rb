class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def listings
    @listing = Listing.where(user_id: params[:id])
    render :listing
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :id)
  end
end
