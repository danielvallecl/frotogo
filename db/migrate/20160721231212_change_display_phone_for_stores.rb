class ChangeDisplayPhoneForStores < ActiveRecord::Migration
  def change
    change_column :stores, :display_phone, :string
  end
end
