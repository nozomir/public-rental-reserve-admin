# == Schema Information
#
# Table name: users
#
#  id         :bigint(8)        not null, primary key
#  username   :string(255)
#  password   :string(255)
#  role       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :user do
    username { 'MyString' }
    password { 'MyString' }
    role { 'MyString' }
  end
end
