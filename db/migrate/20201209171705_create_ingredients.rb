class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.integer :ingredient_list_id, null: false
      t.integer :order, null: false
      t.string :amount, null: false
      t.string :unit
      t.string :item, null: false

      t.timestamps
    end
    add_index :ingredients, :ingredient_list_id
  end
end
