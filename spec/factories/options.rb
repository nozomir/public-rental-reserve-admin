# == Schema Information
#
# Table name: options
#
#  id         :bigint(8)        not null, primary key
#  code       :string(255)
#  name       :string(255)
#  charge     :integer          unsigned
#  delete_flg :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :option do
    code { 'MyString' }
    name { 'MyString' }
    charge { '' }
    delete_flg { false }
  end
end
