# == Schema Information
#
# Table name: saves
#
#  id         :bigint           not null, primary key
#  recipe_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Save < ApplicationRecord
    validates :recipe_id, presence: true, uniqueness: { scope: :user_id }
    validates :user_id, presence: true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
    belongs_to :recipe,
        class_name: :Recipe,
        foreign_key: :recipe_id
end
