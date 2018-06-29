class CommentSerializer < ActiveModel::Serializer
    attributes :id, :content, :concert_id
    belongs_to :concert
end
