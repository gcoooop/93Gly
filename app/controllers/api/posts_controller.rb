class Api::PostsController < ApplicationController

  def index
    if params[:postIds]
      @posts = Post.where(id: params[:postIds])
    else
      @posts = Post.all
    end
  end

  def show 
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def create
    @post = Post.new(post_params)
    @post.photographer_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if @post.photographer_id != current_user.id 
      return render json: ["You can only edit your own posts!"], status: 401
    end

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    if params[:id] == "null"
      return render json: ["No post selected!"], status: 422
    end

    @post = Post.find(params[:id])

    if @post.photographer_id != current_user.id 
      return render json: ["You can only delete your own posts!"], status: 401
    end
    
    if @post 
      @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :caption, :photo)
  end

end
