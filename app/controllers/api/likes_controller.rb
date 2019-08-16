class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(post_id: params[:post_id])
  end

  def create
    @like = Like.new(post_id: params[:post_id], user_id: current_user.id)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 404
    end
  end

  def destroy 
    @like = Like.find(params[:id])
    if @like
      @like.destroy
      render :show
    else
      render json: ["Like not found"], status: 404
    end
  end
end
