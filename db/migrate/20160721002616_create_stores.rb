class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :name
      t.string :image_url
      t.string :url
      t.integer :display_phone
      t.integer :review_count
      t.string :location_address
      t.string :location_city
      t.string :rating_img_url
      t.string :location_neighborhoods

      t.timestamps null: false
    end
  end
end
