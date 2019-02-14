# == Schema Information
#
# Table name: books
#
#  id            :bigint(8)        not null, primary key
#  name          :string(255)
#  reserve_type  :integer
#  site_type     :integer
#  phone         :string(255)
#  mail          :string(255)
#  amount        :integer
#  purpose       :string(255)
#  other         :string(255)
#  start_time    :datetime
#  end_time      :datetime
#  charge        :integer
#  total_charge  :integer
#  profit        :integer
#  option        :string(255)
#  status        :integer
#  paid          :integer
#  code          :string(255)
#  cancel_charge :integer
#  cancel_date   :datetime
#  sent_flg      :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryBot.define do
  factory :book do
    name { 'MyString' }
    reserve_type { 1 }
    site_type { 1 }
    phone { 'MyString' }
    mail { 'MyString' }
    amounit { 1 }
    purpose { 'MyString' }
    other { 'MyString' }
    start_time { '2019-02-05 16:17:11' }
    end_time { '2019-02-05 16:17:11' }
    charge { 1 }
    total_charge { 1 }
    profit { 1 }
    option { 'MyString' }
    status { 1 }
    paid { 1 }
    code { 'MyString' }
    cancel_charge { 1 }
    cancel_date { '2019-02-05 16:17:11' }
    sent_flg { false }
  end
end
