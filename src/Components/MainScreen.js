import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Screen1 from './Screen1/Screen1'


class MainScreen extends React.Component {
    render() {
        const {classes} = this.props
        return (
        <div className={classes.mainContainer}>
            <Screen1 />
          </div>
        )
    }
}

const styles = theme => ({
    mainContainer: {
        padding: '80px',
    minHeight: '300px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
      },
      
})

export default withStyles(styles)(MainScreen)
  