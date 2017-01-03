class RemoveWeddingidFromWeddingtypes < ActiveRecord::Migration
  def change
    remove_column :wedding_types, :wedding_id
  end
end
