class Review < ApplicationRecord

  validates :author_id, :listing_id, :body, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User


  belongs_to :listing

end
