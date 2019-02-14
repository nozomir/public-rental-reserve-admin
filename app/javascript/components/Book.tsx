import * as React from "react";
import * as PropTypes from "prop-types";
import BookModel from './model/BookModel';
import SearchForm from './SearchForm';
import { Button, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  button: {},
})

interface BookProps extends WithStyles<typeof styles> {
  books: Array<BookModel>;
}

class Book extends React.Component<BookProps> {
  render() {
    const { books, classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>予約一覧</h1>
        <SearchForm />
        <ul>
          {books.map((book) => {
            return (
              <li>
                {book.name}
                <Button variant="contained" color="primary">詳細</Button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Book);
