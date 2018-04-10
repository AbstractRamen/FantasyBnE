class AddAttachmentImageToListings < ActiveRecord::Migration[5.1]
  def self.up
    change_table :listings do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :listings, :image
  end
end
