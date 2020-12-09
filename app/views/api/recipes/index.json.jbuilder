@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :author_id, :time, :photo
        # recipe.author do
        #     json.extract! author, :id, :author.first_name, :author.last_name
        # end
        json.author_first_name recipe.author.first_name 
        json.author_last_name recipe.author.last_name
        # json.author_id @recipe.author.id
    end
end