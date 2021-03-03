import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';
class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : '',
            errorMessage: '',
        }
        this.welcomeboy = this.welcomeboy.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    render() {
        return (
            <>
            {this.state.errorMessage !== ''  && <div  className="alert alert-info" role="alert">{this.state.errorMessage}</div> }
            <h2>Welcome !!!</h2>
            <div className="container">
                This is the welcome component {this.props.match.params.name}. Please head over to your list of Todos  <Link to="/todo">here</Link> 
            </div>
            <span>click here to get your customized welcome message </span>
            <button className="btn btn-success" onClick={this.welcomeboy}>Get Yelcome message</button>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }
    welcomeboy() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => {this.handleSuccessfulResponse(response)}
        // )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => {this.handleSuccessfulResponse(response)}
        // )
        HelloWorldService.executeHelloWorldPathVariable(this.props.match.params.name)
        .then(response => {this.handleSuccessfulResponse(response)}
        )
        .catch(error => this.handleError(error))

    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error){
        this.setState({errorMessage: error.response.data.message})
    }
}

export default Welcome;