import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class Step1 extends React.Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.handleNextStep()
    }

    render() {
        const {classes, handleStepChange, stepFields,  handleNextStep, handleBackStep, handleCheckboxChange} = this.props
    return (
        <div>
            <div className={classes.mainContainerTop}>
                <Typography variant="h4" className={classes.mainHeading}>
                    VEHICLE FEATURES
                </Typography>
                <Typography variant="caption" className={classes.subHeading}>
                    Provide your VIN (Vehicle Identification Number) or license plate number.
                </Typography>
                <div className={classes.formContainer}>
                <ExpansionPanel className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.panelIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.panelHeader}
                        >
                        <Typography className={classes.heading}>STANDARD FEATURES</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Typography variant="caption" className={classes.label}>
                                    Select Mileage
                            </Typography>
                            <FormGroup className={classes.formGroup}>
                                <FormControlLabel
                                    control={<Checkbox  value="gilad" />}
                                    label="Gilad Gray"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.gilad} onChange={handleCheckboxChange('gilad', 'stdFeatures')}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="jason" />}
                                    label="Jason Killian"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.jason} onChange={handleCheckboxChange('jason', 'stdFeatures')}
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox value="antoine" />
                                    }
                                    label="Antoine Llorca"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.antoine} onChange={handleCheckboxChange('antoine', 'stdFeatures')}
                                />
                            </FormGroup>
                        </FormControl>
                        <Divider className={classes.divider} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                 <ExpansionPanel className={classes.panel}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.panelIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.panelHeader}
                        >
                        <Typography className={classes.heading}>STANDARD FEATURES</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Typography variant="caption" className={classes.label}>
                                    Select Mileage
                            </Typography>
                            <FormGroup className={classes.formGroup}>
                                <FormControlLabel
                                    control={<Checkbox  value="gilad" />}
                                    label="Gilad Gray"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.gilad} onChange={handleCheckboxChange('gilad', 'stdFeatures')}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="jason" />}
                                    label="Jason Killian"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.jason} onChange={handleCheckboxChange('jason', 'stdFeatures')}
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox value="antoine" />
                                    }
                                    label="Antoine Llorca"
                                    className={classes.checkboxEle}
                                    checked={stepFields.stdFeatures.antoine} onChange={handleCheckboxChange('antoine', 'stdFeatures')}
                                />
                            </FormGroup>
                        </FormControl>
                        <Divider className={classes.divider} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>  
                       
                <div className={classes.navButton}>

                    <div className={classes.navButtonRight}>
                        <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} onClick={handleNextStep} >
                            Next
                        </Button>
                    </div>
                    
                    <div className={classes.navButtonLeft}>
                        <Button className={classes.button} onClick={handleBackStep} >
                            <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                        </Button>
                    </div>
                    
                </div>
                        
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
    formGroup: {
        width: '100%',
        marginTop: '10px',
        display: 'block',
    },
    formControl: {
        width: '100%',
    },
    panel: {
        background: 'none',
        boxShadow: 'none',
        marginTop: '15px'
    },
    panelHeader: {
        background: '#102b4e',
        color: '#fff'
    },
    panelIcon: {
        color: '#fff'
    },
    checkboxEle: {
        display: 'block',
        width: '45%',
        textAlign: 'left',
        float: 'left',
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

export default withStyles(styles)(Step1)

