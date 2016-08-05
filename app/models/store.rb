class Store < ActiveRecord::Base
  validates :location_address, :uniqueness => true

  before_create :clean_address


  def to_param
    [id, name.parameterize].join("-")
  end

  private
  def clean_address
    address = JSON.parse(self.location_address)
    self.location_address = address.first
  end

end
