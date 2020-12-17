class ChangeComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :comment
    add_column :comments, :text, :text, null: false
  end
end
