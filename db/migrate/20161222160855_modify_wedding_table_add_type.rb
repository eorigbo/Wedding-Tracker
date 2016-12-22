class ModifyWeddingTableAddType < ActiveRecord::Migration
  def change
    add_column :weddings, :type_id, :integer
  end
end
