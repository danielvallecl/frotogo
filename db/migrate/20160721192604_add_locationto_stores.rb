class AddLocationtoStores < ActiveRecord::Migration
  def change
    add_column :stores, :longitude, :decimal
    add_column :stores, :latitude, :decimal
  end
end
