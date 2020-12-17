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
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
