@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :name, :address, :description, :user_id
  end
end
