class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ["The email address and password you entered don't match any NJTimes account. Please try again."], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ['No user logged in!'], status: 404
        end
    end
end
