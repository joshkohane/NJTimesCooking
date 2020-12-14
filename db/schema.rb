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

ActiveRecord::Schema.define(version: 2020_12_14_171220) do

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

  create_table "ingredient_lists", force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.string "header", default: "Ingredients", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order", default: 1, null: false
    t.index ["recipe_id"], name: "index_ingredient_lists_on_recipe_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.integer "ingredient_list_id", null: false
    t.integer "order", null: false
    t.string "unit"
    t.string "item", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "amount"
    t.index ["ingredient_list_id"], name: "index_ingredients_on_ingredient_list_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "title", null: false
    t.string "yield", null: false
    t.string "time", null: false
    t.text "description", null: false
    t.jsonb "directions", default: [], null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tip"
    t.string "category"
    t.index ["author_id"], name: "index_recipes_on_author_id"
    t.index ["title"], name: "index_recipes_on_title", unique: true
  end

  create_table "saves", force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id", "user_id"], name: "index_saves_on_recipe_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_saves_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
