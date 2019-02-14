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

class Book < ApplicationRecord
end
