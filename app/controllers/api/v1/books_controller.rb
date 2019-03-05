class Api::V1::BooksController < Api::V1::ApplicationController
  def index
    @books = Book.order(start_time: :asc)
    @books = @books.where(name: book_params[:reserve_name]) if book_params[:reserve_name].present?
    start_time = if book_params[:start_time].present?
      Time.zone.parse(book_params[:start_time]).beginning_of_day
    else
      Time.zone.today.beginning_of_day
    end
    end_time = if book_params[:end_time].present?
      Time.zone.parse(book_params[:end_time]).end_of_day
    else
      Time.zone.today.next_month.end_of_day
    end
    @books = @books.where(start_time: start_time..end_time)
    @books = @books.where(reserve_type: book_params[:reserve_type]) if book_params[:reserve_type].present?
    @books = @books.where(status: book_params[:status]) if book_params[:status].present?
    @books = @books.where(paid: book_params[:paid]) if book_params[:paid].present?
    @sum_profit = @books.where.not(status: :canceled).sum(:profit)
  end

  def update
    book = Book.find(update_book_params[:id])
    book.update(update_book_params)
  end

  private

  def book_params
    params.permit(
      :reserve_name,
      :start_time,
      :end_time,
      :format,
      reserve_type: [],
      status: [],
      paid: [],
    )
  end

  def update_book_params
    params.permit(
      :id,
      :paid,
    )
  end
end
