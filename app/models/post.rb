# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  title           :string           default(""), not null
#  caption         :string           default(""), not null
#  photographer_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :photographer_id, presence: true

  belongs_to :photographer,
    foreign_key: :photographer_id,
    class_name: "User"

  has_one_attached :photo

  has_many :comments,
    foreign_key: :post_id,
    class_name: "Comment"

  has_many :likes
end
