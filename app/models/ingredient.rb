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
class Ingredient < ApplicationRecord
    validates :ingredient_list_id, :order, :amount, :item, presence: true

    belongs_to :ingredient_list
end
