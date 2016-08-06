class AddRatingToStores < ActiveRecord::Migration
  def change
    add_column :stores, :rating, :integer
  end
end
