import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Screen2 extends React.Component {

    render() {
        const {classes, handleScreenChange, vehicalDetails} = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Make: {vehicalDetails.make}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Model: {vehicalDetails.Model}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    Year: {vehicalDetails.year}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    VIN: {vehicalDetails.vin}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography> */}
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
        )
    }
}

const styles = theme => ({
    card: {
        maxWidth: 345,
        margin: '0 auto'
      },
      media: {
        height: 140,
      },
})

export default withStyles(styles)(Screen2)
  