class Wedding < ActiveRecord::Base
  belongs_to :user
  
  validates :bride, presence: true
  validates :groom, presence: true
  validates :date, presence: true
  validates :expected_guests, numericality: { only_integer: true }
  validates :user_id, presence: true
  validates :type_id, presence: true
  
end
