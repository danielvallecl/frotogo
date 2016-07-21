class SearchController < ApplicationController

  def index
    # offset = 0
    # while offset <= 200 do
      @results= Yelp.client.search('Toronto', { term: 'ice-cream', offset: 0}).businesses
    #   offset += 20
    # end
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
