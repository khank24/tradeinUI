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
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator'
import MenuItem from '@material-ui/core/MenuItem';

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

    render() {
        const {classes, tabDefaultValue, vim, handleChange, handleFormChange, licencePlate, state, handleScreenChange} = this.props
        return (
        <div className={classes.mainContainer}>
            <Typography variant="h4">
                LET'S MEET YOUR VEHICLE
            </Typography>
            <Typography variant="caption">
                We can look it up by VIN or License plate number:
            </Typography>
            <Tabs
                value={tabDefaultValue}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab
                    value="vim"
                    label="VIM"
                    wrapped
                    {...a11yProps('vim')}
                />
                <Tab value="license" label="License Plate" {...a11yProps('license')} />
            </Tabs>
            <TabPanel value={tabDefaultValue} index="vim">
                <div className={classes.vim}>
                    Vehicle Identification Number [VIM]:
                    <Tooltip title="VIM details"><InfoIcon fontSize="small" className={classes.info} /></Tooltip>
                    <ValidatorForm
                        ref="form"
                        onSubmit={() => handleScreenChange('screen2')}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={handleFormChange}
                            name="vim"
                            value={vim}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Button className={classes.button} onClick={() => handleScreenChange('screen0')} >
                            <ArrowLeftIcon /> Back
                        </Button>
                        <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} >
                            Next
                        </Button>
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
            <div className={classes.vim}>
                    Licence Plate:
                    <ValidatorForm
                        ref="form"
                        onSubmit={() => handleScreenChange('screen2')}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={handleFormChange}
                            name="licencePlate"
                            value={licencePlate}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        State:
                        <SelectValidator
                            value={state}
                            onChange={handleFormChange}
                            variant="outlined"
                            name='state'
                            className={classes.inputField}
                            validators={['required']}
                            errorMessages={['this field is required']}
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
                        <Button className={classes.button} onClick={() => handleScreenChange('screen0')} >
                            <ArrowLeftIcon /> Back
                        </Button>
                        <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`}>
                            Next
                        </Button>
                    </ValidatorForm>
                </div>
            </TabPanel>
          </div>
        )
    }
}

const styles = theme => ({
    mainContainer: {
        padding: '20px',
        color: theme.palette.text.secondary,
    },
    vim: {
        width: '400px',
        textAlign: 'left',
        margin: '0 auto'
    },
    info: {
        float: 'right',
        fontSize: '17px'
    },
    inputField: {
        width: '100%',
        margin: '15px 0'
    },
    next: {
        float: 'right'
    }
    
})

export default withStyles(styles)(Screen1)
  