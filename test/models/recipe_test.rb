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
#
require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
