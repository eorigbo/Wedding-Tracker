class ModifyWeddingTableFields < ActiveRecord::Migration
  def change
    remove_column :weddings, :type_id
    remove_column :weddings, :wedding_type_id
    
    add_reference :weddings, :wedding_type, index: true
  end
end
