class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :caption
      t.integer :photographer_id, null: false

      t.timestamps
    end
    add_index :posts, :photographer_id
  end
end
