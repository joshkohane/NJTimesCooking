class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :yield, null: false
      t.string :time, null: false
      t.text :description, null: false
      t.jsonb :directions, null: false, default: []
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :recipes, :title, unique: true
    add_index :recipes, :author_id
  end
end
