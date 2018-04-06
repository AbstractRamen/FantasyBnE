class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.integer :owner_id, index: true
      t.string :address, index: true
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
