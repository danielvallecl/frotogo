# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

offset = 0

while offset <= 2000 do
  yelp_seeds = Yelp.client.search('Toronto', {term: 'ice-cream', location: "Toronto", radius_filter: 40000, offset: offset}).businesses
  yelp_seeds.each do |seed|
    next if seed.location.coordinate == nil
    next if seed.is_closed
    Store.create!(name: seed.name, image_url: seed.image_url, url: seed.url, display_phone: seed.display_phone, is_closed: seed.is_closed, review_count: seed.review_count,location_address: seed.location.address, location_city: seed.location.city, rating_img_url: seed.rating_img_url_large, location_neighborhoods: seed.location.neighborhoods,longitude: seed.location.coordinate.longitude, snippet_text: seed.snippet_text, rating: seed.rating, latitude: seed.location.coordinate.latitude)
  end
  offset += 20
end
