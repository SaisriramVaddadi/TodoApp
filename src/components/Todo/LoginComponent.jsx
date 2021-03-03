import React, { Component } from 'react';
import AuthenticateService from '../../AuthenticateService';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : '',
            password :'',
            isLoginFailed: false
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    render(){
        console.log(this.state.isLoginFailed)
        return(
            <>
            <h2>Login</h2>
               <div className="container">
                   {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Creds</div> }
                </div> 
                UserName: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                Password: <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success"onClick={this.loginClicked}>Login</button>
            </>
        )
    }
    loginClicked(){
        if(this.state.userName === 'sai' && this.state.password === 'password' ){
            AuthenticateService.registerSuccesfulLogin(this.state.userName,this.state.password)
            this.props.history.push(`/welcome/${this.state.userName}`)
            // this.setState({
            //     isLoginFailed: true
            // })
        }
        else{
            this.setState({
                isLoginFailed: true
            })
        }
    }
     handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // handlePassword(event) {
    //     console.log(event.target.value)
    //     this.setState({
    //         password : event.target.value
    //     })
    // }
}