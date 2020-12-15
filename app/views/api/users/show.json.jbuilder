json.partial! '/api/users/user', user: @user

# json.user do
#     json.set! @user.id do
#         json.partial! '/api/users/user', user: @user
#     end
# end

# json.saves do
#     @user.saves.each do |save|
#         json.set! save.id do
#             json.extract! save, :id, :recipe_id, :user_id
#         end
#     end
# end