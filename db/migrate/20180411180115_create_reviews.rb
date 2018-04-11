class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.text :body, null: false

      t.timestamps
    end
  end
end
