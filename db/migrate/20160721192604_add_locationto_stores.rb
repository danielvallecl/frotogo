class AddLocationtoStores < ActiveRecord::Migration
  def up
    add_column :stores, :url, :string
  end

  def down
    drop_column :stores, :url, :string
  end

end
