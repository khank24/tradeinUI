import React from 'react'
import { withStyles } from '@material-ui/core/styles'

class Step3 extends React.Component {

    render() {
        const {classes, handleNextStep, handleBackStep} = this.props
        return (
        <div>
            <div className={classes.mainContainerTop}>
               Step3
            </div>
        </div>
        )
    }
}

const styles = theme => ({
    mainContainerTop: {
        padding: '50px 80px 0 80px',
        [theme.breakpoints.down('sm')]: { 
            padding: '20px 20px 0 20px',
          },
        color: theme.palette.text.secondary,
    },
    mainContainerBottom: {
        padding: '0 80px 100px 80px',
        [theme.breakpoints.down('sm')]: { 
            padding: '0 20px 20px 20px',
          },
        color: theme.palette.text.secondary,
    },
    
})

export default withStyles(styles)(Step3)

