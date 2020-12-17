json.recipe do
    json.set! @recipe.id do
        json.extract! @recipe, :id, :author_id, :title, :yield, :time, :description, :directions, :tip, :category
        json.photoUrl url_for(@recipe.photo)
        json.author_first_name @recipe.author.first_name 
        json.author_last_name @recipe.author.last_name
        if current_user
            @recipe.saves.each do |save|
                if save.user_id === current_user.id
                    json.save_id save.id
                end
            end 
        end
    end
end

json.author do
    json.set! @recipe.author.id do
        json.extract! @recipe.author, :id, :first_name, :last_name
    end
end

json.ingredient_lists do 
    @recipe.ingredient_lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :header, :order, :recipe_id
            json.ingredients do 
                list.ingredients.each do |ingredient|
                    json.set! ingredient.id do
                        json.extract! ingredient, :id, :ingredient_list_id, :order, :unit, :item, :amount
                    end
                end
            end
        end
    end
end

if @recipe.comments
    json.comments do
        @recipe.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :recipe_id, :author_id, :text, :created_at
                json.author_first_name comment.author.first_name
            end
        end
    end
end

if current_user
    @recipe.saves.each do |save|
        if save.user_id === current_user.id
            json.set! save.recipe_id do
                json.extract! save, :id, :recipe_id, :user_id
            end
        end
    end 
end