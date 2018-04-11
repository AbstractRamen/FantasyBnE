@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :name, :address, :user_id
    json.image_url asset_path(listing.image.url)
  #     json.array! review.id

  end
end

# If display is changed, remember to change hp listing index item!

# @listings.each do |listing|
#   json.set! listing.id do
#     json.extract! listing, :id, :name, :address, :user_id
#     json.image_url asset_path(listing.image.url)
#     json.reviews listing.reviews.each do |review|
#       json.array! review.id
#     end
#   end
# end
#
# # If display is changed, remember to change hp listing index item!
