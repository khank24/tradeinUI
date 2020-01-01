import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

class Screen3 extends React.Component {

    render() {
        const {classes, activeStep, steps, handleNextStep, handleBackStep} = this.props
        return (
        <div>
            <div className={classes.mainContainerTop}>
                <Stepper activeStep={activeStep} alternativeLabel className={classes.stepperContainer}>
                    {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {
                    activeStep === 0 &&
                    <Step0 {...this.props} />
                }
                {
                    activeStep === 1 &&
                    <Step1 {...this.props} />
                }
                {
                    activeStep === 2 &&
                    <Step2 />
                }
                {
                    activeStep === 3 &&
                    <Step3 />
                }
                {/* <div className={`${classes.navButton} ${classes.navButtonLicence}`}>
                            
                    <div className={classes.navButtonRight}>
                        <Button variant="contained" type="submit" onClick={handleNextStep} color="primary" className={`${classes.button} ${classes.next}`}>  
                            Next
                        </Button>
                    </div>

                    <div className={classes.navButtonLeft}>
                        <Button className={classes.button} onClick={handleBackStep} >
                            <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                        </Button>
                    </div>
                    
                </div> */}
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
    
    stepperContainer: {
        background: 'transparent',
        '& .MuiStepLabel-completed': {
            color: '#102b4e'
        },
        '& .MuiStepConnector-lineHorizontal': {
            borderTopWidth: '3px'
        },
        '& .MuiStepConnector-completed .MuiStepConnector-lineHorizontal': {
            borderColor: '#102b4e'
        },
        '& .MuiStepConnector-active .MuiStepConnector-lineHorizontal': {
            borderColor: '#102b4e'
        },
    },
    next: {
        float: 'right',
        width: '133px',
        height: '40px',
        objectFit: 'contain',
        borderRadius: '20px',
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1)',
        [theme.breakpoints.down('sm')]: { 
            float: 'none',
          }, 
      //  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #102b4e, #102b4e)',
    },
    navButton: {
        maxWidth: '250px',
        margin: '50px auto',
        height: '30px',
        [theme.breakpoints.down('sm')]: { 
            height: '80px'
          },
    },
    navButtonLicence: {
        [theme.breakpoints.down('sm')]: { 
            marginTop: '25px'
          },
    },
    navButtonRight: {
        maxWidth: '50%',
        float: 'right',
        [theme.breakpoints.down('sm')]: { 
            float: 'none',
            width: '100%',
            textAlign: 'center',
            marginBottom: '20px',
          }, 
    },
    navButtonLeft: {
        maxWidth: '50%',
        float: 'left',
        [theme.breakpoints.down('sm')]: { 
            float: 'none',
            width: '100%',
            textAlign: 'center',
            marginBottom: '20px',
          }, 
    },
    backArrow: {
        transform: 'rotateY(180deg)',
        width: '16px',
        height: '16px',
        marginRight: '5px',
        color: '#102b4e',
      },
    
})

export default withStyles(styles)(Screen3)

