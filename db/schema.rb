# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_02_025006) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "post_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "player_character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_character_id"], name: "index_inventories_on_player_character_id", unique: true
  end

  create_table "inventory_items", force: :cascade do |t|
    t.integer "inventory_id", null: false
    t.integer "item_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["inventory_id", "item_id"], name: "index_inventory_items_on_inventory_id_and_item_id", unique: true
    t.index ["inventory_id"], name: "index_inventory_items_on_inventory_id"
    t.index ["item_id"], name: "index_inventory_items_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name", null: false
    t.float "weight", null: false
    t.string "price"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_items_on_name"
  end

  create_table "player_characters", force: :cascade do |t|
    t.string "name", null: false
    t.string "cclass", null: false
    t.integer "level", null: false
    t.string "race", null: false
    t.string "background", null: false
    t.string "alignment", null: false
    t.integer "xp", null: false
    t.integer "prof_bonus", null: false
    t.integer "hp", null: false
    t.integer "ac", null: false
    t.integer "speed", null: false
    t.integer "str", null: false
    t.integer "dex", null: false
    t.integer "con", null: false
    t.integer "int", null: false
    t.integer "wis", null: false
    t.integer "cha", null: false
    t.text "additional_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_player_characters_on_name"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", default: "", null: false
    t.string "caption", default: "", null: false
    t.integer "photographer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photographer_id"], name: "index_posts_on_photographer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
