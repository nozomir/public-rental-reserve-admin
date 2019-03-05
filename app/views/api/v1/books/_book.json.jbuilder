json.extract! book, :id, :name, :reserve_type, :site_type, :phone, :mail, :amount, :purpose, :other, :start_time, :end_time, :charge, :total_charge, :profit, :option, :status, :paid, :code, :cancel_charge, :cancel_date, :sent_flg, :created_at, :updated_at
json.url book_url(book, format: :json)
