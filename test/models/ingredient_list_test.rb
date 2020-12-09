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
require 'test_helper'

class IngredientListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
