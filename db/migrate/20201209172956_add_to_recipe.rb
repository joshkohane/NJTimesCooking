class AddToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :tip, :string
  end
end
