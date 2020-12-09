# == Schema Information
#
# Table name: ingredient_lists
#
#  id         :bigint           not null, primary key
#  recipe_id  :integer          not null
#  header     :string           default("Ingredients"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class IngredientList < ApplicationRecord
    validates :recipe_id, :header, presence: true

    has_many :ingredients, dependent: :destroy
    belongs_to :recipe
end
