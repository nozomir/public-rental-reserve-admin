class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.integer :reserve_type, limit: 1
      t.integer :site_type, limit: 1
      t.string :phone
      t.string :mail
      t.integer :amount
      t.string :purpose
      t.string :other
      t.datetime :start_time
      t.datetime :end_time
      t.integer :charge
      t.integer :total_charge
      t.integer :profit
      t.string :option
      t.integer :status, limit: 1
      t.integer :paid, limit: 1
      t.string :code
      t.integer :cancel_charge
      t.datetime :cancel_date
      t.boolean :sent_flg

      t.timestamps
    end
  end
end
