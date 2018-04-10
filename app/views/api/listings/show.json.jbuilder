json.set! @listing.id
  json.extract! @listing, :id, :name, :address, :description, :user_id
  json.image_url asset_path(@listing.image.url)
end
