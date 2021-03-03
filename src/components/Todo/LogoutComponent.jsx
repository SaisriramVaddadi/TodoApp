import React, { Component } from 'react'

export default class LogoutComponent extends Component{
    render() {
        return(
            <>
                <h2>Successfully Logged out!!</h2> 
                <div className="container">Make sure you complete your TODOs</div>
            </>
        )
    }
}