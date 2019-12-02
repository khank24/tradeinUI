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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

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

    state = {
        value: 'vim',
        email: '',
        data: {
            vim: '',
        },
    }


    handleChange = (event, value) => {
        this.setState({value})
    }

    handleFormChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
    render() {
        const {classes} = this.props
        const {value, email} = this.state
        return (
        <div className={classes.mainContainer}>
            <Typography variant="h4">
                LET'S MEET YOUR VEHICLE
            </Typography>
            <Typography variant="caption">
                We can look it up by VIN or License plate number:
            </Typography>
            <Tabs
                value={value}
                onChange={this.handleChange}
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
            <TabPanel value={value} index="vim">
                <div className={classes.vim}>
                    Vehicle Identification Number [VIM]:
                    <Tooltip title="VIM details"><InfoIcon fontSize="small" className={classes.info} /></Tooltip>
                    <ValidatorForm
                        ref="form"
                        //onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            variant="outlined" className={classes.inputField}
                            onChange={this.handleFormChange}
                            name="email"
                            value={email}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Button className={classes.button}>
                            <ArrowLeftIcon /> Back
                        </Button>
                        <Button variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`}>
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
            <TabPanel value={value} index="license">
                Item Two
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
  