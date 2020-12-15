json.recipes do
    @recipes.each do |recipe|
        json.set! recipe.id do
            json.extract! recipe, :id, :title, :time, :directions, :category
            json.photoUrl url_for(recipe.photo)
            json.author_first_name recipe.author.first_name 
            json.author_last_name recipe.author.last_name
            if current_user
                recipe.saves.each do |save|
                    if save.user_id === current_user.id
                        json.save_id save.id
                    end
                end 
            end
            # json.ingredient_lists do 
            #     recipe.ingredient_lists.each do |list|
            #         json.set! list.id do
            #             json.extract! list, :id, :header, :order
            #         end
            #     end
            # end
        end
    end
end

# if current_user
#     json.saves do
#         @recipes.each do |recipe|
#             recipe.saves.each do |save|
#                 if save.user_id === current_user.id
#                     json.set! save.recipe_id do
#                         json.extract! save, :id, :recipe_id, :user_id
#                     end
#                 end
#             end
#         end
#     end
# end