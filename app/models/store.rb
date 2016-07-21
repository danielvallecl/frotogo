class Store < ActiveRecord::Base
  validates :location_address, :uniqueness => true
end
