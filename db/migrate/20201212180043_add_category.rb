class AddCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :category, :string
  end
end
