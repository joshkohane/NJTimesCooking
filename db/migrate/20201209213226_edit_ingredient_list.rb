class EditIngredientList < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredient_lists, :order, :integer, null: false, default: 1
  end
end
