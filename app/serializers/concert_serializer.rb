class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :band, :venue, :tour, :date, :song, :attendee_count, :likes
  has_many :comments
end
