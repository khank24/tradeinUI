import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


class Footer extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.footer}>
                <ExpansionPanel className={classes.disclaimer}>
                    <ExpansionPanelSummary
                    
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            Disclaimer 
                            <ArrowDropDownIcon />
                        </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
          </div>
        )
    }
}

const styles = theme => ({
    footer: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderTop: '1px solid #aaa'
      },
      disclaimer: {
          boxShadow: 'unset',
      },
      heading: {
          margin: '0 auto',

          '& > svg': {
            position: 'relative',
            top: '6px',
          },
      }
})

export default withStyles(styles)(Footer)