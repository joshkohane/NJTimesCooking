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

ActiveRecord::Schema.define(version: 2020_12_09_171705) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ingredient_lists", force: :cascade do |t|
    t.integer "recipe_id", null: false
    t.string "header", default: "Ingredients", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_ingredient_lists_on_recipe_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.integer "ingredient_list_id", null: false
    t.integer "order", null: false
    t.string "amount", null: false
    t.string "unit"
    t.string "item", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.index ["author_id"], name: "index_recipes_on_author_id"
    t.index ["title"], name: "index_recipes_on_title", unique: true
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

end
