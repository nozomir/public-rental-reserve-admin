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

require 'rails_helper'

RSpec.describe Option, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
