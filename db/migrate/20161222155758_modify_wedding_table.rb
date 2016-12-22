class ModifyWeddingTable < ActiveRecord::Migration
  def change
    remove_column :weddings, :name
    add_column :weddings, :bride, :text
    add_column :weddings, :groom, :text
  end
end
