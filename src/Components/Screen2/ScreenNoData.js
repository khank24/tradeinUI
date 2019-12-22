import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Link from '@material-ui/core/Link';


class ScreenNoData extends React.Component {

    render() {
        const {classes, handleBackScreenChange, vehicalDetails, formFields} = this.props
        return (
            <div className={classes.mainContainer}>
                <Typography variant="h4">
                    WE"RE SORRY!
                </Typography>
                <Typography variant="caption">
                    We can not appraise your vehicle online at this time. But don’t worry – you can send your vehicle information to the dealership for an in-person evaluation.
                </Typography>
                <div className={classes.navButton}>
                            
                    <div className={classes.navButtonRight}>
                        <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} >
                            Send To Dealer
                        </Button>
                    </div>
                    <div className={classes.navButtonRight}>
                        <Link onClick={() => handleBackScreenChange('screen1')}  variant="body2">
                            Appraise Difrent Vehicle <PlayCircleFilledWhiteIcon className={classes.linkArrow} />
                        </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

const styles = theme => ({
    mainContainer: {
        padding: '50px 80px ',
        maxWidth: '500px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: { 
            padding: '20px'
          },
    
      },
    card: {
        maxWidth: 320,
        margin: '20px auto',
        
      },
      media: {
        height: 140,
      },
      cardBottom: {
        maxWidth: 320, 
        margin: '0 auto'
      },
      cardBottomText: {
          fontSize: '10px',
          display: 'block',
          marginBottom: '15px',
          fontFamily: 'FordAntenna',
          lineHeight: '2',
          letterSpacing: '0.5px',
          textAlign: 'center',
          color: '#4d4d4d',
      },

      vehicalTitle: {
          color: '#20063C',
          fontSize: '32px',
          lineHeight: '30px',
          fontWeight: 'bold',
          textTransform: 'uppercase'

      },
      vehicalText: {
          fontSize: '12px',
          textAlign: 'left',

          '& span': {
              float: 'right',
          }
      },
      divider: {
          margin: '15px 0'
      },
      next: {
        margin: '15px 0',
        borderRadius: '15px'
      },
      vehicalLink: {
        color: '#20063C',
        fontSize: '12px',
        textDecoration: 'underline',
      },
      backArrow: {
        transform: 'rotateY(180deg)',
        width: '16px',
        height: '16px',
        marginRight: '5px'
      },
      mainHeading: {
        //fontFamily
          fontSize: '50px',
          lineHeight: '1.4',
          [theme.breakpoints.down('sm')]: { 
            fontSize: '30px',
            lineHeight: '1.2',
          },
          fontWeight: '200',
          letterSpacing: '2px',
          fontFamily:"FordAntennaCond",
          color: '#4d4d4d',
      },
      next: {
        width: '180px',
        height: '40px',
        margin: '15px 0 20px',
        objectFit: 'contain',
        borderRadius: '20px',
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1)',
      //  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #102b4e, #102b4e)',
    },
    navButton: {
        margin: '20px 0'
    },
    linkArrow: {
        width: '16px',
        height: '16px',
        marginLeft: '5px',
        position: 'relative',
        top: '3px'
      },
})

export default withStyles(styles)(ScreenNoData)
  