@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :name, :address, :description, :user_id
  end
end
