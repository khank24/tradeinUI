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
        const {classes, handleBackScreenChange, vehicalDetails} = this.props
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
                            <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} >
                                Select
                            </Button>
                            <Typography variant="body1" className={classes.vehicalLink}>
                                Vehicle info is correct
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className={classes.cardBottom}>
                    <Typography variant="caption" className={classes.cardBottomText}>
                        Is this your vehicle?Is this your vehicle?Is this your vehicle?Is this your vehicle?
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
    card: {
        maxWidth: 320,
        margin: '20px auto'
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
      }
})

export default withStyles(styles)(Screen2)
  