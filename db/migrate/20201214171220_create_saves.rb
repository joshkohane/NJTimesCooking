class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :saves, [:recipe_id, :user_id], unique: true
    add_index :saves, :user_id
  end
end
