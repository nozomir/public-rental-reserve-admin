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

ActiveRecord::Schema.define(version: 2019_02_06_020634) do

  create_table "books", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.integer "reserve_type", limit: 1
    t.integer "site_type", limit: 1
    t.string "phone"
    t.string "mail"
    t.integer "amount"
    t.string "purpose"
    t.string "other"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "charge"
    t.integer "total_charge"
    t.integer "profit"
    t.string "option"
    t.integer "status", limit: 1
    t.integer "paid", limit: 1
    t.string "code"
    t.integer "cancel_charge"
    t.datetime "cancel_date"
    t.boolean "sent_flg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "options", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.integer "charge", unsigned: true
    t.boolean "delete_flg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
