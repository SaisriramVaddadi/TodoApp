import React, { Component } from 'react'
import './Todo.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { withRouter } from 'react-router';
import   HeaderComponent from '../Todo/HeaderComponent';
import AuthenticatedRoute from '../../AuthenticatedRoute';
import LoginComponent from '../Todo/LoginComponent';
import TodoList from '../Todo/TodoList';
import Welcome from '../Todo/Welcome';
import LogoutComponent from '../Todo/LogoutComponent';
import FooterComponent from '../Todo/FooterComponent';
import ErrorComponent from '../Todo/ErrorComponent';
import TodoComponent from '../Todo/TodoComponent';

class Todo extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <> 
                    <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" exact component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}></AuthenticatedRoute>
                            <AuthenticatedRoute path ="/todo" component={TodoList}/>
                            <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
            </div>
        )
    }
} 
export default Todo;





