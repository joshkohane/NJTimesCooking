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

require 'action_view'



class Comment < ApplicationRecord
    include ActionView::Helpers::DateHelper
    validates :author_id, :recipe_id, :text, presence: true

    belongs_to :recipe
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    # self.time = distance_of_time_in_words(:created_at, Time.now)
end
