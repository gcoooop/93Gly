# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  post_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :post_id, :author_id, presence: true

  belongs_to :post

  belongs_to :author,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :parent,
    foreign_key: :parent_id,
    class_name: "Comment",
    optional: true

  has_many :replies,
    foreign_key: :parent_id,
    class_name: "Comment",
    dependent: :destroy

end
