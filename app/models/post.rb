# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  caption         :string
#  photographer_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :photographer_id, presence: true

  belongs_to :photographer,
    foreign_key: :photographer_id,
    class_name: "User"

  has_one_attached :photo
end
