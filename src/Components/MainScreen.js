import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Screen1 from './Screen1/Screen1'
import Screen2 from './Screen2/Screen2'
import axios from 'axios'
import ScreenNoData from './Screen2/ScreenNoData'


class MainScreen extends React.Component {
    state = {
        tabDefaultValue: 'vin',
        formFields: {
            vin: '',
            licencePlate: 'dsdsds',
            state: 'dssdsd',
        },
        presentScreen: 'screenNoData',
        vehicalDetails: {
            make: "Ford",
            Model: "Mustang",
            year: '2019',
            vin: '3GNFK16T83G209781',
        }
    }


    handleChange = (event, value) => {
        this.setState({tabDefaultValue:value})
    }

    handleFormChange = (event) => {
        const name = event.target.name;
        const formFields = this.state.formFields;
        formFields[name] = event.target.value;
        this.setState({ formFields });
    }

    handleScreenChange = (screen, type) => {
       const { licencePlate, state, vin} = this.state.formFields

        if(type === 'vin') {
            axios.post(`http://localhost:8182/api/v2/chromedata`, {
                "vin": vin
                }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                console.log(res.data)
                const { vehicalDetails } = this.state
                vehicalDetails.make= res.data.vinDescription.division
                vehicalDetails.Model= res.data.vinDescription.modelName
                vehicalDetails.year= res.data.vinDescription.modelYear
                vehicalDetails.vin= res.data.vinDescription.vin
                if (vehicalDetails.year <= 2005) {
                    this.setState({
                        vehicalDetails,
                        presentScreen: 'screenNoData'
    
                    })
                } else {
                    this.setState({
                        vehicalDetails,
                        presentScreen: 'screen2'
    
                    })
                }
               
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            axios.post(`http://localhost:8181/api/v2/quickvin`, {
                "license-plate": licencePlate,
                "state": state
                }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                console.log(res.data)
                const { vehicalDetails } = this.state
                vehicalDetails.make= res.data.quickvin['vin-info'].decode.make
                vehicalDetails.Model= res.data.quickvin['vin-info'].decode.model
                vehicalDetails.year= res.data.quickvin['vin-info'].decode.year
                vehicalDetails.vin= res.data.quickvin['vin-info'].vin

                if (vehicalDetails.year <= 2005) {
                    this.setState({
                        vehicalDetails,
                        presentScreen: 'screenNoData'
    
                    })
                } else {
                    this.setState({
                        vehicalDetails,
                        presentScreen: 'screen2'
    
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
        }        
    }

    handleBackScreenChange = (screen) => {
        this.setState({
            presentScreen: screen

        })
    }

    render() {
        const {classes} = this.props
        const {tabDefaultValue, formFields, presentScreen, vehicalDetails} = this.state
        return (
        <div className={classes.mainContainer}>
            {
                presentScreen === 'screen1' && 
                <Screen1 
                    tabDefaultValue={tabDefaultValue} 
                    vin={formFields.vin} 
                    handleFormChange = {this.handleFormChange} 
                    handleChange={this.handleChange} 
                    licencePlate={formFields.licencePlate}
                    state={formFields.state}
                    handleScreenChange={this.handleScreenChange}
                    handleBackScreenChange={this.handleBackScreenChange}
                />
            }
            {
                presentScreen === 'screen2' && 
                <Screen2
                    handleScreenChange={this.handleScreenChange}
                    vehicalDetails= {vehicalDetails}
                    handleBackScreenChange={this.handleBackScreenChange}
                    formFields={formFields}
                />
            }
            {
                presentScreen === 'screenNoData' && 
                <ScreenNoData
                    handleScreenChange={this.handleScreenChange}
                    vehicalDetails= {vehicalDetails}
                    handleBackScreenChange={this.handleBackScreenChange}
                    formFields={formFields}
                />
            }
            
          </div>
        )
    }
}

const styles = theme => ({
    mainContainer: {
        background: '#f1f1f1',
        padding: '10px 80px 10px 80px ',
        minHeight: '300px',
        // [theme.breakpoints.down('sm')]: { 
        //     padding: '20px'
        //   },
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
      },
      
})

export default withStyles(styles)(MainScreen)
