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
    end
end