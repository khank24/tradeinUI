import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator'
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const USAstates = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

class Screen1 extends React.Component {

onSubmitLicence = (event) => {
	event.preventDefault();
	this.props.handleScreenChange('screen2', 'licence')

}
onSubmitVin = (event) => {
	event.preventDefault();
	this.props.handleScreenChange('screen2', 'vin')

}
    render() {
        const {classes, tabDefaultValue, vin, handleChange, handleFormChange, licencePlate, state, handleBackScreenChange} = this.props
        return (
        <div>
            <div className={classes.mainContainerTop}>
            <Typography variant="h4" className={classes.mainHeading}>
            What Vehicle Will You Trade In?
            </Typography>
            <Typography variant="caption" className={classes.subHeading}>
                Provide your VIN (Vehicle Identification Number) or license plate number.
            </Typography>
            <Tabs
                value={tabDefaultValue}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab
                    value="vin"
                    label="VIN"
                    wrapped
                    {...a11yProps('vin')}
                />
                <Tab value="license" label="License Plate" {...a11yProps('license')} />
            </Tabs>
            </div>
            <Divider />
            <div className={classes.mainContainerBottom}>
            <TabPanel value={tabDefaultValue} index="vin">
                <div className={classes.vin}>
                    VIN
                    <Tooltip title="Vehicle Identification Number can find on the Car or Title" enterDelay={500} leaveDelay={200}>
                        <InfoIcon className={classes.info} />
                    </Tooltip>


                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmitVin}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={handleFormChange}
                            name="vin"
                            value={vin}
                            validators={['required']}
                            errorMessages={['VIN is required']}
                        />
                        <Tooltip title="Vehicle Identification Number can find on the Car or Title">
                            <Typography variant="body1" className={classes.vehicalLink}>
                                What is VIN?
                            </Typography>
                        </Tooltip>
                        <div className={classes.navButton}>

                            <div className={classes.navButtonRight}>
                                <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} >
                                    Next
                                </Button>
                            </div>
                            
                            <div className={classes.navButtonLeft}>
                                <Button className={classes.button} onClick={() => handleBackScreenChange('screen0')} >
                                    <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                                </Button>
                            </div>
                          
                        </div>
                        
                        
                    </ValidatorForm>
                    {/* <TextField
                    id="vim" variant="outlined" className={classes.inputField}
                    required
                        name="vim"
                        onChange={this.handleFormChange}
                        value={this.state.data.vim} />
                    <Button className={classes.button}>
                        <ArrowLeftIcon /> Back
                    </Button>
                    <Button variant="contained" color="primary" className={`${classes.button} ${classes.next}`}>
                        Next
                    </Button> */}
                </div>
            </TabPanel>
            <TabPanel value={tabDefaultValue} index="license">
            <div className={classes.vin}>
                    Licence Plate
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmitLicence}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={handleFormChange}
                            name="licencePlate"
                            value={licencePlate}
                            validators={['required']}
                            errorMessages={['License plate is required.']}
                        />
                        State
                        <SelectValidator
                            value={state}
                            onChange={handleFormChange}
                            variant="outlined"
                            name='state'
                            className={classes.inputField}
                            validators={['required']}
                            errorMessages={['State is required.']}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                USAstates.map(state => {
                                    return <MenuItem key={state.abbreviation} value={state.abbreviation}>{state.name}</MenuItem>
                                })
                            }
                        </SelectValidator>
                        <div className={`${classes.navButton} ${classes.navButtonLicence}`}>
                            
                             <div className={classes.navButtonRight}>
                                <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`}>  
                                    Next
                                </Button>
                            </div>

                            <div className={classes.navButtonLeft}>
                                <Button className={classes.button} onClick={() => handleBackScreenChange('screen0')} >
                                    <PlayCircleFilledWhiteIcon className={classes.backArrow} /> Back
                                </Button>
                            </div>
                           
                        </div>
                        
                        
                    </ValidatorForm>
                </div>
            </TabPanel>
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
    vin: {
        width: '400px',
        [theme.breakpoints.down('sm')]: { 
            width: '100%',
          },
        textAlign: 'left',
        margin: '0 auto'
    },
    info: {
        fontSize: '17px',
        position: 'relative',
        top: '2px',
        left: '4px'
    },
    inputField: {
        width: '100%',
        margin: '15px 0'
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
        width: '50%',
        float: 'right',
        [theme.breakpoints.down('sm')]: { 
            float: 'none',
            width: '100%',
            textAlign: 'center',
            marginBottom: '20px',
          }, 
    },
    navButtonLeft: {
        width: '50%',
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
          fontFamily: 'FordAntennaCond',
           fontStretch: 'normal',
          color: '#4d4d4d',
           
      },
      
      subHeading: {
          width: '578px',
          height: '27px',
          fontFamily: 'FordAntenna',
          fontSize: '14px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: '1.93',
          letterSpacing: '1px',
          textAlign: 'center',
          color: '#4d4d4d',
          },

        vehicalLink: {
        color: '#102b4e',
        fontSize: '14px',
        textDecoration: 'underline',
        textAlign:'center',
        fontFamily:"FordAntenna",
        lineHeight:'42px',
        letterSpacing:'1px',
        paddingBottom: '15px',
        marginBottom:'30px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#eeeeee',
      },
})

export default withStyles(styles)(Screen1)

