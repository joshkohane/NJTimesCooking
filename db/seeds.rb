# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all

# user1 = User.create(first_name: 'Josh', last_name: 'Kohane', email: 'joshkohane@gmail.com', password: 'password')
# user2 = User.create(first_name: 'Alison', last_name: 'Greek', email: 'thegreekalison', password: 'password')
# user3 = User.create(first_name: 'Melinda', last_name: 'Clark', email: 'nottherealone', password: 'password')
# user4 = User.create(first_name: 'Nathan', last_name: 'Joan', email: 'areyouevenjewish', password: 'password')

Recipe.destroy_all
Ingredient.destroy_all
IngredientList.destroy_all

first = Recipe.create!(title: 'Lasagna', yield: '4 to 5 servings', time: 'A few hours', description: 'The yummiest lasagna ever', directions: ['This is step one', 'This is step two', 'This is step three', 'This is step four', 'This is step five'], author_id: 1)

first_list = IngredientList.create!(recipe_id: first.id, header: 'For the sauce')
second_list = IngredientList.create!(recipe_id: first.id, header: 'For the noodles')

first_ing = Ingredient.create!(ingredient_list_id: first_list.id, order: 1, amount: '2 to 3', unit: 'cups', item: 'Cheese')
first_ing = Ingredient.create!(ingredient_list_id: first_list.id, order: 2, amount: '1', item: 'Egg')
first_ing = Ingredient.create!(ingredient_list_id: first_list.id, order: 3, amount: '4', unit: 'pounds', item: 'Meat')
first_ing = Ingredient.create!(ingredient_list_id: second_list.id, order: 1, amount: '2', item: 'Eggs')
first_ing = Ingredient.create!(ingredient_list_id: second_list.id, order: 2, amount: '2 to 3', unit: 'cups', item: 'Flour')
first_ing = Ingredient.create!(ingredient_list_id: second_list.id, order: 3, amount: '2 to 3', unit: 'teaspoons', item: 'Water')