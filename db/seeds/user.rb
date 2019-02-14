data_path = Rails.root.join('db', 'data')
users_path = data_path.join('users.csv')
upsert_ids = []
CSV.table(users_path).each do |row|
  user = User.find_or_initialize_by(id: row[:id])
  user.update!(
    username: row[:username],
    password: row[:password],
    role: row[:role],
    created_at: row[:created_at],
    updated_at: row[:updated_at],
  )
  upsert_ids << user.id
end

destroyed = User.where.not(id: upsert_ids).destroy_all
p "[#{File.basename(__FILE__)}] upserted: #{upsert_ids.count}, destroyed: #{destroyed.count}"
