# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :post_id, :user_id, presence: true
  validates_uniqueness_of :post_id, scope: :user_id

  belongs_to :post
  belongs_to :user
end
