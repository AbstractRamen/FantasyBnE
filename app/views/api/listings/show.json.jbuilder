json.extract! @listing, :id, :name, :address, :description, :user_id
json.image_url asset_path(@listing.image.url)
json.reviews do
  json.array! (@listing.reviews) do |review|
    json.id review.id
    json.authorId review.author_id
    json.body review.body
  end
end
