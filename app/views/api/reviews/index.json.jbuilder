@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :author_id
    json.extract! review.user, :name, :created_at
    json.image_url asset_path(review.user.image.url)
  end
end
