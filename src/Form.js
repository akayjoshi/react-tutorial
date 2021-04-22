import React, { Component } from 'react';

class Form extends Component {
    initialState = { 
        name : '',
        job: ''
    }
    state=this.initialState

    handleChange = (event) =>{
        const {name , value}  = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = (event) => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        event.preventDefault()
        
    }

    render() { 
        const {name , job} =this.state;

        return ( 
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    id="name"
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    id="job"
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
         );
    }
}
 
export default Form;