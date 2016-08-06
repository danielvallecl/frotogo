class Store < ActiveRecord::Base
  validates :location_address, :uniqueness => true

  before_create :clean_address

  private
  def clean_address
    address = JSON.parse(self.location_address)
    self.location_address = address.first
  end
end
