class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.post_id = params[:post_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.author_id != current_user.id
      return render json: ["You can only edit your own comment!"], status: 401
    end

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end 
  end

  def destroy
    if params[:id] == "null"
      return render json: ["No post selected!"], status: 422
    end

    @comment = Comment.find(params[:id])

    if @comment
      @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
