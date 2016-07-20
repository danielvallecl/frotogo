# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


yelp_seeds = Yelp.client.search('Toronto', { term: 'ice-cream', sort: 0, }).businesses

yelp_seeds.each do |seed|
  Store.create(image_url: seed.image_url)
end


#store.create
