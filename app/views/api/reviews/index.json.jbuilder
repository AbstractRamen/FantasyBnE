@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :author_id

  

  end
end