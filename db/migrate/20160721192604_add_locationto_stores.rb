class AddLocationtoStores < ActiveRecord::Migration
  create_table :stores do |t|

    t.string :name
    t.string :image_url
    t.integer :display_phone
    t.integer :review_count
    t.string :location_address
    t.string :location_city
    t.string :rating_img_url
    t.text :description
    t.string :location_neighborhoods
    t.decimal :longitude
    t.decimal :latitude
  end
end
