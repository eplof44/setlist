class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
        t.string :band
        t.string :venue
        t.string :tour
        t.date :date
        t.text :song
        t.integer :attendee_count, :default => "0"
      t.timestamps
    end
  end
end
