import React from 'react'
import { withStyles } from '@material-ui/core/styles'


class Header extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.header}>
                <div className={classes.logo}>LOGO</div>
                <div className={classes.tradeIn}>TRADE IN</div>
            </div>
        )
    }
}

const styles = theme => ({
    header: {
        padding: '20px',
        color: theme.palette.text.secondary,
        height: '20px',
      },
      logo: {
        [theme.breakpoints.down('sm')]: { 
            margin: '0 auto',
            textAlign: 'center',
          },
          [theme.breakpoints.up('sm')]: { 
            float: 'left',
          },
        
      },
      tradeIn: {
          float: 'right',
          [theme.breakpoints.down('sm')]: { 
            display: 'none',
          },
      }
})

export default withStyles(styles)(Header)
  