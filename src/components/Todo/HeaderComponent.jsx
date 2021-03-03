import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticateService from '../../AuthenticateService.js';
import {withRouter} from 'react-router';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticateService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/saisriram-vaddadi-63135315b/" className="navbar-brand">Sriram Vaddadi</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Sai">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticateService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);