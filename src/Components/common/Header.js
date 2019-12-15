import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import  Link from '@material-ui/core/Link';


class Header extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.header}>
                <div className={classes.logo}>
                 <Link href="http://www.ford.com/" target="_blank"  variant="body2"> 
                                <img src="https://www.quickquote.ford.com/cc/static/spc/img/ford-logo.png"  title="ford"  alt="ford"/>
                            </Link>
                </div>
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
  