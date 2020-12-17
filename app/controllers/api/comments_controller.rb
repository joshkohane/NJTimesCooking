class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.recipe_id = params[:recipe_id]
        @comment.author_id = current_user.id
        @comment.save
        render 'api/recipes/show'
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render :show
    end

    private
    
    def comment_params
        params.require(:comment).permit(:text)
    end
end