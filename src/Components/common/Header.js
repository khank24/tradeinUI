import React from 'react'
import { withStyles } from '@material-ui/core/styles'


class Header extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.header}>
            <div className={classes.logo}>TRADE IN</div>
          </div>
        )
    }
}

const styles = theme => ({
    header: {
        padding: '20px',
        color: theme.palette.text.secondary,
      },
      logo: {
        textAlign: 'left',
      }
})

export default withStyles(styles)(Header)
  