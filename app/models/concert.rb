class Concert < ApplicationRecord
has_many :comments
validates :band, presence: true

end
