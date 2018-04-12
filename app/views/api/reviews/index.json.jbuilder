@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :author_id
    json.extract! review.user, :name
  end
end
