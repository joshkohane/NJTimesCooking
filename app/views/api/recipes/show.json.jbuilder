json.recipe do
    json.set! @recipe.id do
        json.extract! @recipe, :id, :author_id, :title, :yield, :time, :description, :directions, :tip, :photo
        json.author_first_name @recipe.author.first_name 
        json.author_last_name @recipe.author.last_name
        # json.author_id @recipe.author.id
    end
end

# json.author do
#     @recipe.author do |author|
#         json.set! author.id do
#             json.extract! author, :id, :first_name, :last_name
#             # json.first_name @recipe.author.first_name 
#             # json.last_name @recipe.author.last_name
#             # json.id @recipe.author.id
#         end
#     end
# end

json.ingredient_lists do 
    @recipe.ingredient_lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :header, :order
        end
    end
end

json.ingredients do 
    @recipe.ingredients.each do |ingredient|
        json.set! ingredient.id do
            json.extract! ingredient, :id, :ingredient_list_id, :order, :unit, :item, :amount
        end
    end
end