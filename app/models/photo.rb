# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  caption         :string
#  photographer_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :photographer_id, presence: true

  belongs_to :photographer,
    foreign_key: :photographer_id,
    class_name: "User"

  has_one_attached :photo
  
end
