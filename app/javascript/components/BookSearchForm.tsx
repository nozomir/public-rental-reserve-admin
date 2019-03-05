import * as React from "react";
import {
  Grid,
  TextField,
  Paper,
  Theme,
  WithStyles,
  createStyles,
  withStyles,
  Toolbar,
  Typography,
  AppBar,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Button,
} from '@material-ui/core';
import BookSearchInput from './input/BookSearchInput';
import { Const } from './const/Const';

const styles = (theme: Theme) => createStyles({
  paper: {
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  appBar: {
    position: "static",
    color: "default",
  },
  formLabel: {
    margin: "auto 20px",
  },
  checkBox: {
    padding: "5px",
  },
  grid: {
    padding: "3px 0",
  },
});

interface BookSearchFormProps extends WithStyles<typeof styles> {
  onSubmit: (input: BookSearchInput) => void;
}

type CheckBoxState = {
  id: string,
  selected: boolean,
  text: string,
};

type BookSearchState = {
  reserveName: string;
  startTime: string;
  endTime: string;
  reserveType: CheckBoxState[];
  status: CheckBoxState[];
  paid: CheckBoxState[];
};

class BookSearchForm extends React.Component<BookSearchFormProps, BookSearchState> {
  constructor(props: BookSearchFormProps) {
    super(props);
    let now = new Date();
    this.state = {
      reserveName: '',
      startTime: '',
      endTime: '',
      reserveType: Const.Book.RESERVE_TYPE,
      status: Const.Book.STATUS,
      paid: Const.Book.PAID,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Paper className={classes.paper}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              検索フォーム
          </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={(e) => { this.handleSubmit(e); }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={6} className={classes.grid}>
              <TextField
                id="reserve-name"
                label="予約名"
                type="search"
                className={classes.textField}
                margin="normal"
                onChange={(e) => { this.handleChange(e); }}
                value={this.state.reserveName}
                name="reserveName"
              />
            </Grid>
            <Grid item xs={3} className={classes.grid}>
              <TextField
                id="start-time"
                name="startTime"
                label="表示期間開始日"
                type="date"
                defaultValue={this.getNowYmd()}
                className={classes.textField}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3} className={classes.grid}>
              <TextField
                id="end-time"
                name="endTime"
                label="表示期間終了日"
                type="date"
                defaultValue={this.getNextMonthYmd()}
                className={classes.textField}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <FormGroup row>
                <FormLabel className={classes.formLabel}>利用タイプ</FormLabel>
                {
                  this.state.reserveType.map((box) => {
                    return (
                      <FormControlLabel
                        key={box.id}
                        name="reserveType"
                        onChange={this.changeSelection}
                        control={
                          <Checkbox className={classes.checkBox} checked={box.selected} value={box.id} onChange={this.changeSelection} />
                        }
                        label={box.text}
                      />
                    )
                  })
                }
              </FormGroup>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <FormGroup row>
                <FormLabel className={classes.formLabel}>予約状況</FormLabel>
                {
                  this.state.status.map((box) => {
                    return (
                      <FormControlLabel
                        key={box.id}
                        name="status"
                        onChange={this.changeSelection}
                        control={
                          <Checkbox className={classes.checkBox} checked={box.selected} value={box.id} onChange={this.changeSelection} />
                        }
                        label={box.text}
                      />
                    )
                  })
                }
              </FormGroup>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <FormGroup row>
                <FormLabel className={classes.formLabel}>支払状況</FormLabel>
                {
                  this.state.paid.map((box) => {
                    return (
                      <FormControlLabel
                        key={box.id}
                        name="paid"
                        onChange={this.changeSelection}
                        control={
                          <Checkbox className={classes.checkBox} checked={box.selected} value={box.id} onChange={this.changeSelection} />
                        }
                        label={box.text}
                      />
                    )
                  })
                }
              </FormGroup>
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <Button type="submit" variant="contained" color="primary">検索</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }

  changeSelection(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const id = event.target.value;
    switch (event.target.name) {
      case 'reserveType':
        const reserveType = this.state.reserveType.map((d) => {
          return {
            id: d.id,
            selected: (d.id === id ? !d.selected : d.selected),
            text: d.text,
          };
        });

        this.setState({
          reserveType: reserveType,
        });
        break;
      case 'status':
        const status = this.state.status.map((d) => {
          return {
            id: d.id,
            selected: (d.id === id ? !d.selected : d.selected),
            text: d.text,
          };
        });

        this.setState({
          status: status,
        });
        break;
      case 'paid':
        const paid = this.state.paid.map((d) => {
          return {
            id: d.id,
            selected: (d.id === id ? !d.selected : d.selected),
            text: d.text,
          };
        });

        this.setState({
          paid: paid,
        });
        break;
    }
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    event.preventDefault();

    switch (event.target.name) {
      case 'reserveName':
        this.setState({ reserveName: event.target.value })
        break;
      case 'startTime':
        this.setState({ startTime: event.target.value })
        break;
      case 'endTime':
        this.setState({ endTime: event.target.value })
        break;
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = new BookSearchInput();
    input.reserveName = this.state.reserveName;
    input.startTime = this.state.startTime;
    input.endTime = this.state.endTime;
    input.reserveType = this.filterCheckBoxState(input.reserveType, this.state.reserveType, true);
    input.status = this.filterCheckBoxState(input.status, this.state.status, false);
    input.paid = this.filterCheckBoxState(input.paid, this.state.paid, false);
    this.props.onSubmit(input);
  }

  /**
   * checkBoxの検索条件を整形する
   * 
   * @param input BookSearchInputの中身
   * @param state stateの中身
   * @param isReserveType reserveTypeだけ特殊な処理をするため、その条件分岐のためのフラグ
   */
  private filterCheckBoxState(input: string[], state: CheckBoxState[], isReserveType: boolean) {
    input = state.map((d) => {
      if (d.selected) {
        return d.id;
      }
    });

    // reserveTypeだけ、MTG利用が1と3の2つのstatusがあるため、その処理をする
    if (isReserveType && input.indexOf('1')) {
      input.push('3');
    }

    // undefinedを取り除く
    return input.filter(v => v);
  }

  private getNowYmd(): string {
    const dt = new Date();
    const y = dt.getFullYear();
    const m = ("00" + (dt.getMonth() + 1)).slice(-2);
    const d = ("00" + dt.getDate()).slice(-2);
    const result = y + "-" + m + "-" + d;
    return result;
  }

  private getNextMonthYmd(): string {
    const dt = new Date();
    const y = dt.getFullYear();
    const m = ("00" + (dt.getMonth() + 2)).slice(-2);
    const d = ("00" + dt.getDate()).slice(-2);
    const result = y + "-" + m + "-" + d;
    return result;
  }
}

export default withStyles(styles)(BookSearchForm);
