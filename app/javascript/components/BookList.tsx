import * as React from "react";
import BookModel from './model/BookModel';
import { Const } from './const/Const';
import {
  Button,
  Theme,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Paper,
  Select,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "0 auto",
  },
  button: {},
  tableSum: {
    width: "auto",
  },
  table: {},
  tableCell: {
    padding: "0",
  },
  row: {},
  rowCancel: {
    backgroundColor: "#CCCCCC",
  },
  paper: {
    margin: '10px 0',
  },
  select: {
    fontSize: 14,
  },
  paperSum: {
    margin: '10px 0',
    width: "auto",
    display: "inline-block",
  },
});

interface BookListProps extends WithStyles<typeof styles> {
  books: Array<BookModel>;
  paid: { [s: string]: string };
  sumProfit: number;
  onChange: (id: string, status: string) => void;
}

class BookList extends React.Component<BookListProps> {
  constructor(props: BookListProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { books, sumProfit, classes } = this.props;

    return (
      <div>
        <Paper className={classes.paperSum}>
          <Table className={classes.tableSum}>
            <TableHead>
              <TableRow>
                <CustomTableCell>ヒット件数</CustomTableCell>
                <CustomTableCell>純利益合計</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.row}>
                <CustomTableCell>{books.length}件</CustomTableCell>
                <CustomTableCell>{sumProfit}円</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>予約名</CustomTableCell>
                <CustomTableCell className={classes.tableCell}>利用タイプ</CustomTableCell>
                <CustomTableCell>日付</CustomTableCell>
                <CustomTableCell>時間</CustomTableCell>
                <CustomTableCell>純利益</CustomTableCell>
                <CustomTableCell>予約状況</CustomTableCell>
                <CustomTableCell className={classes.tableCell}>支払状況</CustomTableCell>
                <CustomTableCell>予約日</CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => {
                const startTime = new Date(book.startTime);
                const endTime = new Date(book.endTime);
                const createdAt = new Date(book.createdAt);
                return (
                  <TableRow className={book.status === 'canceled' ? classes.rowCancel : classes.row} key={book.id}>
                    <CustomTableCell>{book.name}</CustomTableCell>
                    <CustomTableCell className={classes.tableCell}>
                      {Const.Book.RESERVE_TYPE.find((e) => {
                        if (e.code === 'mtg') {
                          return book.reserveType.match(/mtg/) ? true : false;
                        }
                        return e.code === book.reserveType;
                      }).text}
                    </CustomTableCell>
                    <CustomTableCell>{startTime.toLocaleDateString('ja-JP')}</CustomTableCell>
                    <CustomTableCell>
                      {startTime.toLocaleTimeString('ja-JP')} - {endTime.toLocaleTimeString('ja-JP')}
                    </CustomTableCell>
                    <CustomTableCell>{book.profit}円</CustomTableCell>
                    <CustomTableCell>
                      {Const.Book.STATUS.find((e) => {
                        return e.code === book.status;
                      }).text}
                    </CustomTableCell>
                    <CustomTableCell className={classes.tableCell}>
                      <Select
                        native
                        value={this.props.paid[book.id]}
                        onChange={this.handleChange}
                        inputProps={{
                          name: "paid",
                          id: book.id.toString(),
                        }}
                        className={classes.select}
                      >
                        {Const.Book.PAID.map((e) => {
                          return (
                            <option value={e.code} key={e.id}>{e.text}</option>
                          );
                        })}
                      </Select>
                    </CustomTableCell>
                    <CustomTableCell>{createdAt.toLocaleString('ja-JP')}</CustomTableCell>
                    <CustomTableCell>
                      <Button variant="contained" color="primary">編集</Button>
                    </CustomTableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();

    const status = event.target.value;
    const id = event.target.id;

    this.props.onChange(id, status);
  }
}

export default withStyles(styles)(BookList);
