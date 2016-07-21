class SearchController < ApplicationController

  def index
    @results = Store.all
  end

  def new
  end

  def edit
  end
end

#
# offset = 0
# limit = 0
#
# while offset && limit <= 200 do
#   offset += 20 && limit += 20
# end
#
# yelp_seeds = Yelp.client.search('Toronto', { term: 'ice-cream', limit: limit, offset: offset}).businesses
