class AddTypeIdToWeddings < ActiveRecord::Migration
  def change
    add_reference :weddings, :wedding_type, index: true
  end
end
