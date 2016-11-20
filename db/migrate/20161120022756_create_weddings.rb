class CreateWeddings < ActiveRecord::Migration
  def change
    create_table :weddings do |t|
      t.string :name
      t.date :date
      t.string :location
      t.integer :expected_guests
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
