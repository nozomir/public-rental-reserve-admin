data_path = Rails.root.join('db', 'data')
options_path = data_path.join('options.csv')
upsert_ids = []
CSV.table(options_path).each do |row|
  option = Option.find_or_initialize_by(id: row[:id])
  option.update!(
    code: row[:code],
    name: row[:name],
    charge: row[:charge],
    delete_flg: row[:delete_flg],
    created_at: Time.zone.now,
    updated_at: Time.zone.now,
  )
  upsert_ids << option.id
end

destroyed = Option.where.not(id: upsert_ids).destroy_all
p "[#{File.basename(__FILE__)}] upserted: #{upsert_ids.count}, destroyed: #{destroyed.count}"
