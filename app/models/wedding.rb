class Wedding < ActiveRecord::Base
  belongs_to :user
  belongs_to :wedding_type
  
  delegate :name, :to => :wedding_type
  
  validates :bride, presence: true
  validates :groom, presence: true
  validates :date, presence: true
  validates :expected_guests, numericality: { only_integer: true }
  validates :user_id, presence: true
  validates :wedding_type_id, presence: true
  
end
