import * as React from "react";
import * as PropTypes from "prop-types";
import BookModel from './model/BookModel';
import BookSearchForm from './BookSearchForm';
import BookSearchInput from './input/BookSearchInput'
import BookList from './BookList';
import axios from 'axios';
import { Theme, Button, createStyles, withStyles, WithStyles } from "@material-ui/core";

const LIST_URL = '/api/v1/books.json';
const UPDATE_URL = '/api/v1/books/';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "0 auto",
  },
  button: {
    margin: "20px 0",
  },
});

interface BookState {
  books: Array<BookModel>;
  paid: { [s: string]: string };
  sumProfit: number;
  input: BookSearchInput;
}

interface BookProps extends WithStyles<typeof styles> {
  url: string;
  pollInterval: number;
}

class Book extends React.Component<BookProps, BookState> {
  constructor(props: BookProps) {
    super(props);
    this.state = {
      books: [],
      paid: {},
      sumProfit: 0,
      input: new BookSearchInput(),
    };
    this.searchBooks = this.searchBooks.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  searchBooks(input: BookSearchInput = this.state.input) {
    axios.get(LIST_URL, {
      params: input,
    })
      .then((result) => {
        let paid = {};
        result.data.books.map((book) => {
          paid[book.id] = book.paid;
        });
        this.setState({
          books: result.data.books,
          paid: paid,
          sumProfit: result.data.sumProfit,
        });
      })
      .catch((data) => {
        console.log(data);
      });
  }

  updateStatus(id: string, status: string) {
    axios.put(UPDATE_URL + id, {
      paid: status,
    }).then((result) => {
      let paid = this.state.paid;
      paid[id] = status;
      this.setState({
        paid: paid,
      });
    })
      .catch((data) => {
        alert(data);
        console.log(data);
      });
  }

  componentDidMount() {
    this.searchBooks();
    // setInterval(this.searchBooks, this.props.pollInterval);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <h1>予約一覧</h1>
        <BookSearchForm onSubmit={this.searchBooks} />
        <Button className={classes.button} variant="contained" color="secondary">新規予約登録</Button>
        <BookList
          books={this.state.books}
          paid={this.state.paid}
          sumProfit={this.state.sumProfit}
          onChange={this.updateStatus}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Book);
