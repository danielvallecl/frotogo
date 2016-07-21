class SearchController < ApplicationController

  def index
    @results = Store.all
  end

  def new
  end

  def edit
  end
end
