class ChangeIngredients < ActiveRecord::Migration[5.2]
  def change
    remove_column :ingredients, :amount
    add_column :ingredients, :amount, :string
  end
end
