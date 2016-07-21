class SearchController < ApplicationController

  def index
    @stores = Store.all
  end

  def new
  end

  def edit
  end
end
