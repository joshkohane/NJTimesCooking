class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.save
        render :show
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render :show
    end

    private
    
    def comment_params
        params.require(:comment).permit(:recipe_id, :text)
    end
end