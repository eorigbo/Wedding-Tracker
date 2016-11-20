class Wedding < ActiveRecord::Base
  belongs_to :user
  
  validates :name, presence: true
  validates :date, presence: true
  validates :expected_guests, numericality: { only_integer: true }
  #validates :user_id, presence: true
  
end
