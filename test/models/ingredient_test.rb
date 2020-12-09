# == Schema Information
#
# Table name: ingredients
#
#  id                 :bigint           not null, primary key
#  ingredient_list_id :integer          not null
#  order              :integer          not null
#  amount             :string           not null
#  unit               :string
#  item               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require 'test_helper'

class IngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
