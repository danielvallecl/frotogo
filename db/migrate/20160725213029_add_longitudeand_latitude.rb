class AddLongitudeandLatitude < ActiveRecord::Migration
  def change
    add_column :stores, :latitude, :decimal
    add_column :stores, :longitude, :decimal
  end
end
