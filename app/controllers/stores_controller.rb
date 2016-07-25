class StoresController < ApplicationController

  def index
    @stores = Store.all
    @baskin_robbins = Store.where("name like ?", "%Baskin%")
    @dairy_queen = Store.where("name like ?", "%Dairy Queen%")
    @yogen_fruz = Store.where("name like ?", "%Yogen%")
    @menchies = Store.where("name like ?", "%Menchie%")
    @laura_secord = Store.where("name like ?", "%Secord%")
    @yogurtys = Store.where("name like ?", "%Yogurty%")

    gon.stores = @stores
    gon.baskin_robbins = @baskin_robbins
  end

  def show
    @store = Store.find(params[:id])
  end

  private
  def store_params
    params.require(:store).permit(:name, :image_url, :display_phone, :review_count, :location_address, :location_city, :owner_id, :rating_img_url, :description, :location_neighborhoods, :longitude, :latitude, :url)
  end

end
