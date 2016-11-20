json.extract! wedding, :id, :name, :date, :location, :expected_guests, :user_id, :created_at, :updated_at
json.url wedding_url(wedding, format: :json)