json.comment do
    json.set! @comment.id do
        json.extract! @comment, :id, :recipe_id, :author_id, :text, :created_at
        json.author_first_name @comment.author.first_name
    end
end