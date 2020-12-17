# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  recipe_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  text       :text             not null
#
class Comment < ApplicationRecord
    validates :author_id, :recipe_id, :text, presence: true

    belongs_to :recipe
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end