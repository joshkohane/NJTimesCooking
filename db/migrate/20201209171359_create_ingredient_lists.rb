class CreateIngredientLists < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredient_lists do |t|
      t.integer :recipe_id, null: false
      t.string :header, null: false, default: 'Ingredients'

      t.timestamps
    end
    add_index :ingredient_lists, :recipe_id
  end
end
