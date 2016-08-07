class AddSnippetTextToStores < ActiveRecord::Migration
  def change
    add_column :stores, :snippet_text, :string
  end
end
