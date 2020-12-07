# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(first_name: 'Josh', last_name: 'Kohane', email: 'joshkohane@gmail.com', password: 'password')
user2 = User.create(first_name: 'Alison', last_name: 'Greek', email: 'thegreekalison', password: 'password')
user3 = User.create(first_name: 'Melinda', last_name: 'Clark', email: 'nottherealone', password: 'password')
user4 = User.create(first_name: 'Nathan', last_name: 'Joan', email: 'areyouevenjewish', password: 'password')