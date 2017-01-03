class CreateWeddingtypes < ActiveRecord::Migration
  def change
    create_table :wedding_types do |t|
      t.string :name
      t.references :wedding, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
