json.extract! @review, :id, :body, :author_id, :listing_id
json.extract! @review.user, :name
json.image_url asset_path(@review.user.image.url)
