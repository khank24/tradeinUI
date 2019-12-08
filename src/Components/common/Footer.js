import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


class Footer extends React.Component {
    state = {
        showContent: false,
    }

    toggalContent = () => {
        this.setState({
            showContent: !this.state.showContent
        })
    }
    render() {
        const {classes} = this.props
        return (
            <div className={classes.footer}>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <Link href="http://google.com" target="_blank"  variant="body2">
                            Ford Privacy Policy <PlayCircleFilledWhiteIcon className={classes.linkArrow} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="http://google.com" target="_blank"  variant="body2">
                            Trade-In Terms & conditions <PlayCircleFilledWhiteIcon className={classes.linkArrow} />
                        </Link>
                    </Grid>
                </Grid>

                <Typography className={classes.heading}>
                    <Link onClick={this.toggalContent}  variant="body2">
                        Disclaimer 
                        <ArrowDropDownIcon className={classes.dropArrow} />
                    </Link>
                </Typography>
                {
                    this.state.showContent && 
                    <Typography className={classes.heading}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                    </Typography>
                    
                }
          </div>
        )
    }
}

const styles = theme => ({
    footer: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderTop: '1px solid #ddd',
        padding: '20px'
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
      },
      linkArrow: {
        width: '16px',
        height: '16px',
        marginLeft: '5px',
        position: 'relative',
        top: '3px'
      },
      dropArrow: {
        position: 'relative',
        top: '6px'
      }
})

export default withStyles(styles)(Footer)