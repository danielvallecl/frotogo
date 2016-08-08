class StoresController < ApplicationController

  def index
    @stores = Store.all

    gon.stores = @stores
    gon.baskin_robbins = @baskin_robbins
  end

  def show
    @store = Store.find(params[:id])
    render layout: "show"
  end

  private
  def store_params
    params.require(:store).permit(:name, :image_url, :display_phone, :review_count, :location_address, :location_city, :owner_id, :rating_img_url, :description, :location_neighborhoods, :longitude, :latitude, :url)
  end

end
