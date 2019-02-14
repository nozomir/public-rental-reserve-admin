import * as React from "react";
import Button from '@material-ui/core/Button';
import { Grid, TextField, Paper, Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "solid 1px #000000",
    borderRadius: 0,
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
  button: {},
});

interface SearchFormProps extends WithStyles<typeof styles> {
}

class SearchForm extends React.Component<SearchFormProps> {
  render() {
    const classes = this.props.classes;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs>
            <TextField
              id="reserve-name-search"
              label="予約名"
              type="search"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>表示期間</Paper>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(SearchForm);
