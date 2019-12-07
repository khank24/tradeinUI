import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Screen1 from './Screen1/Screen1'
import Screen2 from './Screen2/Screen2'
import axios from 'axios'


class MainScreen extends React.Component {
    state = {
        tabDefaultValue: 'vim',
        formFields: {
            vim: '',
            licencePlate: '',
            state: '',
        },
        presentScreen: 'screen1'
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

    handleScreenChange = (screen) => {
       const { licencePlate, state} = this.state.formFields

	   const lp = licencePlate


        const formData = {
            'licence-plate': 'ech234',
            'state': 'MI'
        }
      
        axios.post(`http://localhost:8091/api/v2/quickvin`, {
  "license-plate": lp,
  "state": state
}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {classes} = this.props
        const {tabDefaultValue, formFields, presentScreen} = this.state
        return (
        <div className={classes.mainContainer}>
            {
                presentScreen === 'screen1' && 
                <Screen1 
                    tabDefaultValue={tabDefaultValue} 
                    vim={formFields.vim} 
                    handleFormChange = {this.handleFormChange} 
                    handleChange={this.handleChange} 
                    licencePlate={formFields.licencePlate}
                    state={formFields.state}
                    handleScreenChange={this.handleScreenChange}
                />
            }
            {
                presentScreen === 'screen2' && 
                <Screen2
                    handleScreenChange={this.handleScreenChange}
                />
            }
            
          </div>
        )
    }
}

const styles = theme => ({
    mainContainer: {
        padding: '80px',
    minHeight: '300px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
      },
      
})

export default withStyles(styles)(MainScreen)
