import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: '20px',
    color: theme.palette.text.secondary,
  },
  logo: {
    textAlign: 'left',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    padding: '80px',
    minHeight: '300px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
        <div className={classes.header}>
          <div className={classes.logo}>Logo</div>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.container}>
          <div>Container</div>
        </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.footer}>
            <div>Footer</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

