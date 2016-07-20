class SearchController < ApplicationController

  def index
    @results = Yelp.client.search('Toronto', { term: 'ice-cream'}).businesses
  end

  def new
  end

  def edit
  end
end
