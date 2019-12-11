import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './common/Header'
import Footer from './common/Footer'
import MainScreen from './MainScreen'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#102b4e',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#4d4d4d',
    //  dark:'#102b4e',    // will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <MainScreen />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  );
}

