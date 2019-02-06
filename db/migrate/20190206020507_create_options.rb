class CreateOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :options do |t|
      t.string :code
      t.string :name
      t.unsigned_integer :charge
      t.boolean :delete_flg

      t.timestamps
    end
  end
end
