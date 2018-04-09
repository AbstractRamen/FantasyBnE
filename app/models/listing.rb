class Listing < ApplicationRecord

  validates :user_id, :address, :name, presence: true

  belongs_to :user

end
