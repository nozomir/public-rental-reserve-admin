json.books @books do |book|
  json.partial! book
end

json.sum_profit @sum_profit
