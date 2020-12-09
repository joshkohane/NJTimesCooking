class Api::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render :index
    end

    def show
        @recipe = Recipe.find_by(id: params[:id])
        if @recipe
            render :show
        else
            render json: @recipe.errors.full_messages, status: 401
        end
    end
end
