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


class Screen2 extends React.Component {

    render() {
        const {classes, handleBackScreenChange, vehicalDetails, formFields} = this.props
        return (
            <div className={classes.mainContainer}>
                <Typography variant="h4">
                    HERE'S WHAT WE FOUND
                </Typography>
                <Typography variant="caption">
                    Is this your vehicle?
                </Typography>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/edge/2020/collections/3-2/20_frd_edg_ps34_tnm_rprd_356x180.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="subtitle1" className={classes.vehicalTitle}>
                                {`${vehicalDetails.year} ${vehicalDetails.make}`}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.vehicalTitle}>
                                {vehicalDetails.Model}
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.vehicalText}>
                                VIN: <span>{vehicalDetails.vin}</span>
                            </Typography>
                            {
                                formFields.state &&
                                <Typography variant="body1" className={classes.vehicalText}>
                                    State: <span>{formFields.state}</span>
                                </Typography>
                            }
                            {
                                formFields.licencePlate &&
                                <Typography variant="body1" className={classes.vehicalText}>
                                    Licence Plate: <span>{formFields.licencePlate}</span>
                                </Typography>
                            }
                            
                            <Button variant="contained" type="submit" color="primary" onClick={() => handleBackScreenChange('screen3')} className={`${classes.button} ${classes.next}`} >
                                Select
                            </Button>
                            <Typography variant="body1" className={classes.vehicalLink}>
                                Vehicle info is Incorrect
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className={classes.cardBottom}>
                    <Typography variant="caption" className={classes.cardBottomText}>
                       This image is not an exact representation of your vehicle, but only an example. 
                    </Typography>
                    <Button className={classes.button} onClick={() => handleBackScreenChange('screen1')} >
                        <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                    </Button>
                </div>
                
            </div>
            
        )
    }
}

const styles = theme => ({
    mainContainer: {
        padding: '50px 80px ',
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
        width: '133px',
        height: '40px',
        margin: '15px 0 20px',
        objectFit: 'contain',
        borderRadius: '20px',
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1)',
      //  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #102b4e, #102b4e)',
    },
})

export default withStyles(styles)(Screen2)
  