import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const items = [
    {
        "name": "SXT",
    },
]

const colors = [
    {
        "name": "Red",
    },
    {
        "name": "Black",
    },
]

class Step0 extends React.Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.handleNextStep()
    }
    render() {
        const {classes, handleFormChange, handleBackScreenChange, handleStepChange, stepFields, handleFormChangeSteps} = this.props

        return (
        <div>
            <div className={classes.mainContainerTop}>
                <Typography variant="h4" className={classes.mainHeading}>
                    VEHICLE BASICS
                </Typography>
                <Typography variant="caption" className={classes.subHeading}>
                    Provide your VIN (Vehicle Identification Number) or license plate number.
                </Typography>
                <div className={classes.formContainer}>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <Typography variant="caption" className={classes.label}>
                           Select trim
                        </Typography>
                        <SelectValidator
                            value={stepFields.trim}
                            onChange={handleFormChangeSteps}
                            variant="outlined"
                            name='trim'
                            className={classes.inputField}
                            validators={['required']}
                            errorMessages={['Trim is required.']}
                            >
                            <MenuItem value="">
                                <em>Select trim</em>
                            </MenuItem>
                            {
                                items.map(item => {
                                    return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                                })
                            }
                        </SelectValidator>
                        <Typography variant="caption" className={classes.label}>
                           Select Mileage
                        </Typography>
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={handleStepChange}
                            name="mileage"
                            
                            value={stepFields.mileage}
                            validators={['required']}
                            errorMessages={['Mileage is required']}
                        />
                        <Typography variant="caption" className={classes.subText}>
                            Provide your VIN (Vehicle Identification Number) or license plate number. Provide your VIN (Vehicle Identification Number) or license plate number.
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="caption" className={classes.label}>
                           Do You have two keys?
                        </Typography>
                        <RadioGroup aria-label="keys" name="keys" value={stepFields.keys} onChange={handleStepChange} className={classes.radio}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes"  />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        <Divider className={classes.divider} />
                        <Typography variant="caption" className={classes.label}>
                           Select Color
                        </Typography>
                        <SelectValidator
                            value={stepFields.color}
                            onChange={handleFormChangeSteps}
                            variant="outlined"
                            name='color'
                            className={classes.inputField}
                            validators={['required']}
                            errorMessages={['color is required.']}
                            >
                            <MenuItem value="">
                                <em>Select color</em>
                            </MenuItem>
                            {
                                colors.map(item => {
                                    return <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                                })
                            }
                        </SelectValidator>
                        <div className={classes.navButton}>

                            <div className={classes.navButtonRight}>
                                <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} >
                                    Next
                                </Button>
                            </div>
                            
                            <div className={classes.navButtonLeft}>
                                <Button className={classes.button} onClick={() => handleBackScreenChange('screen2')} >
                                    <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                                </Button>
                            </div>
                          
                        </div>
                        
                        
                    </ValidatorForm>
                </div>
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
    inputField: {
        width: '100%',
    },
    divider: {
        margin: '40px 0'
    },
    radio: {
        flexDirection: 'row',
        '& label': {
            marginRight: '60px'
        }
    },
    formContainer: {
        margin: '20px auto',
        maxWidth: '520px',

    },
    subText: {
        textAlign: 'left',
        lineHeight: '11px',
    },
    label: {
        display: 'block',
        textAlign: 'left',
        marginTop: '15px'
    },
    // next: {
    //     float: 'right',
    //     width: '133px',
    //     height: '40px',
    //     objectFit: 'contain',
    //     borderRadius: '20px',
    //     boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1)',
    //     [theme.breakpoints.down('sm')]: { 
    //         float: 'none',
    //       }, 
    //   //  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #102b4e, #102b4e)',
    // },
    // navButton: {
    //     maxWidth: '500px',
    //     margin: '50px auto',
    //     height: '30px',
    //     [theme.breakpoints.down('sm')]: { 
    //         height: '80px'
    //       },
    // },
    // navButtonLicence: {
    //     [theme.breakpoints.down('sm')]: { 
    //         marginTop: '25px'
    //       },
    // },
    // navButtonRight: {
    //     maxWidth: '50%',
    //     float: 'right',
    //     [theme.breakpoints.down('sm')]: { 
    //         float: 'none',
    //         width: '100%',
    //         textAlign: 'center',
    //         marginBottom: '20px',
    //       }, 
    // },
    // navButtonLeft: {
    //     maxWidth: '50%',
    //     float: 'left',
    //     [theme.breakpoints.down('sm')]: { 
    //         float: 'none',
    //         width: '100%',
    //         textAlign: 'center',
    //         marginBottom: '20px',
    //       }, 
    // },
    // backArrow: {
    //     transform: 'rotateY(180deg)',
    //     width: '16px',
    //     height: '16px',
    //     marginRight: '5px',
    //     color: '#102b4e',
    //   },
})

export default withStyles(styles)(Step0)

