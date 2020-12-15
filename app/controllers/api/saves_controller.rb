class Api::SavesController < ApplicationController
    def create
        @save = Save.new
        @save.recipe_id = params[:recipe_id]
        @save.user_id = current_user.id
        @save.save
        render :show
    end

    def destroy
        @save = Save.find_by(id: params[:id])
        @save.destroy
        render :show
    end
end
