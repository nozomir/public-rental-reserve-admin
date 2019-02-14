data_path = Rails.root.join('db', 'data')
books_path = data_path.join('books.csv')
upsert_ids = []
# rubocop:disable Metrics/BlockLength
CSV.table(books_path).each do |row|
  book = Book.find_or_initialize_by(id: row[:id])
  book.update!(
    name: row[:name],
    reserve_type: row[:reserve_type],
    site_type: row[:site_type],
    phone: row[:phone],
    mail: row[:mail],
    amount: row[:amount],
    purpose: row[:purpose],
    other: row[:other],
    start_time: row[:start_time],
    end_time: row[:end_time],
    charge: row[:charge],
    total_charge: row[:total_charge],
    profit: row[:profit],
    option: row[:option],
    status: row[:status],
    paid: row[:paid],
    code: row[:code],
    cancel_charge: row[:cancel_charge],
    cancel_date: row[:cancel_date],
    sent_flg: row[:sent_flg],
    created_at: row[:created_at] || Time.zone.now,
    updated_at: row[:updated_at] || Time.zone.now,
  )
  upsert_ids << book.id
end
# rubocop:enable Metrics/BlockLength

destroyed = Book.where.not(id: upsert_ids).destroy_all
p "[#{File.basename(__FILE__)}] upserted: #{upsert_ids.count}, destroyed: #{destroyed.count}"
