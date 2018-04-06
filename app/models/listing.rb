class Listing < ApplicationRecord

  validates :owner_id, :address, :name, presence: true

  belongs_to :user

end
