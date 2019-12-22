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
            <div className={classes.footerContainer}>
                <div className={classes.footerTop}>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <Link href="https://www.ford.com/help/privacy/#privacy" target="_blank"  variant="body2">
                                Ford Privacy Policy <PlayCircleFilledWhiteIcon className={classes.linkArrow} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Link href="http://www.ford.com/help/terms/" target="_blank"  variant="body2">
                                Trade-In Terms & conditions <PlayCircleFilledWhiteIcon className={classes.linkArrow} />
                            </Link>
                        </Grid>
                    </Grid>

                    <Typography className={classes.heading}>
                        <Link onClick={this.toggalContent}  variant="body2">
                            DISCLOSURES 
                            <ArrowDropDownIcon className={classes.dropArrow} />
                        </Link>
                    </Typography>
                    {
                        this.state.showContent && 
                        <Typography className={classes.heading}>

                        <h6>The Program is tailored specifically so that consumers are provided with the highest possible trade-in appraisal (Trade-In Appraisal) for their vehicle.  If your vehicle qualifies, you can apply your trade-in appraisal toward the purchase or lease of a new Ford or Lincoln vehicle or Certified pre-owned Ford or Lincoln Vehicle subject to the Terms. Trade-In Appraisal is available for any qualified 2006 and later-model-year vehicle.</h6>
                     
                       </Typography>
                        
                    }
                </div>
                <div className={classes.footerBottom}>
                    <Grid container >
                        <Grid item xs={12} sm={9}>
                            <ul className={classes.footerList}>
                                <li>&copy; 2019 Ford Motor Company</li>
                                <li>
                                    <Link href="http://www.ford.com/help/terms/" target="_blank"  variant="body2">
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.ford.com/help/privacy/#privacy" target="_blank"  variant="body2">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </Grid>

                       <Grid item xs={12} sm={3} className={classes.footerLogo}  >
                        
                            <Link href="http://www.ford.com/" target="_blank"  variant="body2"> 
                                <img src="https://www.quickquote.ford.com/cc/static/spc/img/ford-logo.png"  title="ford"  alt="Ford Go Further"/>
                               {/* http://automotivecdn.com/brand-logos/png/Ford_logo_horizontal-xs.png */}
                            </Link>
                         
                        </Grid>  
                    </Grid> 
                        
                </div>
            </div>
            
        )
    }
}

const styles = theme => ({
    footerTop: {
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
      },
      footerBottom: {
          background: '#f1f1f1',
          padding: '15px 30px'
      },
      textRight: {
          textAlign: 'right',
      },
      footerLogo: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: { 
            margin: '0',
             width: '91.2px',
              height: '32.6px',
              textAlign: 'left',
           //   padding: '19px 32px',
          },
      },
      footerList: {
          listStyle: 'none',
          paddingLeft: '0',
          '& li': {
              fontSize: '11px',
              color: theme.palette.text.primary,
              display: 'inline-block',
              marginRight: '10px',
              [theme.breakpoints.down('sm')]: { 
                display: 'block',
                margin: '0 auto',
                textAlign: 'left',
                marginRight: '0',
                marginBottom: '6px'
              },
          },
          '& li a': {
            fontSize: '11px',
            color: theme.palette.text.primary,
        }
      }
})

export default withStyles(styles)(Footer)