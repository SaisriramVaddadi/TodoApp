import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import  AuthenticatedService from './AuthenticateService.js';

export default class AuthenticatedRoute extends Component {
    render() {
       if(AuthenticatedService.isUserLoggedIn()){
           return(<Route {...this.props}></Route>);
       }
       else{
          return(<Redirect to="/login"></Redirect>); 
       }
    }
}
