class BooksController < ApplicationController
  def index
    @books = Book
      .where(start_time: Time.zone.today.beginning_of_day..Time.zone.today.next_month.end_of_day)
      .order(start_time: :asc)
  end
end
