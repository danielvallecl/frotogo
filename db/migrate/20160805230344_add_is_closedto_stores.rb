class AddIsClosedtoStores < ActiveRecord::Migration
  def change
    add_column :stores, :is_closed, :boolean
  end
end
