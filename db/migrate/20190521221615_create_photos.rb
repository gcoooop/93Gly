class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :caption
      t.integer :photographer_id, null: false

      t.timestamps
    end
    add_index :photos, :photographer_id
  end
end
