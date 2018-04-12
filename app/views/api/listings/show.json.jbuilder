json.extract! @listing, :id, :name, :address, :description, :user_id
json.image_url asset_path(@listing.image.url)
json.reviews do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :author_id
    end
  end
end
# json.reviews @listing.reviews.pluck(:id, :body)
