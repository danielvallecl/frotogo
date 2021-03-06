# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

offset = 0

while offset <= 1000 do
  yelp_seeds = Yelp.client.search({term: 'ice-cream', location: 'Toronto', offset: 0}).businesses
  yelp_seeds.each do |seed|
    next if seed.location.coordinate == nil
    Store.create(name: seed.name, image_url: seed.image_url, url: seed.url, display_phone: seed.display_phone, review_count: seed.review_count,location_address: seed.location.address, location_city: seed.location.city, rating_img_url: seed.rating_img_url, location_neighborhoods: seed.location.neighborhoods,longitude: seed.location.coordinate.longitude, latitude: seed.location.coordinate.latitude)
  end
  offset += 20
end
