FactoryBot.define do
  factory :book do
    name { "MyString" }
    reserve_type { 1 }
    site_type { 1 }
    phone { "MyString" }
    mail { "MyString" }
    amounit { 1 }
    purpose { "MyString" }
    other { "MyString" }
    start_time { "2019-02-05 16:17:11" }
    end_time { "2019-02-05 16:17:11" }
    charge { 1 }
    total_charge { 1 }
    profit { 1 }
    option { "MyString" }
    status { 1 }
    paid { 1 }
    code { "MyString" }
    cancel_charge { 1 }
    cancel_date { "2019-02-05 16:17:11" }
    sent_flg { false }
  end
end
