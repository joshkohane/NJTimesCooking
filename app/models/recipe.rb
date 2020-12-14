# == Schema Information
#
# Table name: recipes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  yield       :string           not null
#  time        :string           not null
#  description :text             not null
#  directions  :jsonb            not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  tip         :string
#  category    :string
#
class Recipe < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :yield, :time, :description, :directions, :author_id, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id
    has_many :ingredient_lists, dependent: :destroy
    has_many :ingredients,
        through: :ingredient_lists,
        source: :ingredients
    has_one_attached :photo
    has_many :saves,
        class_name: :Save,
        foreign_key: :recipe_id,
        dependent: :destroy

end
