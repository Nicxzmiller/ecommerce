import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route} from "react-router-dom";
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import '../App.css';

class Signin extends Component {
    render() {
        return (
            <Router>
                <div className="Appp">
                    <div className="App__Aside"></div>
                        <div className="App__Form">
                            <div className="PageSwitcher">
                                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">SIGN IN</NavLink>
                                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">SIGN UP</NavLink>
                            </div>

                            <div className="FormTitle">
                                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">SIGN IN</NavLink> or
                                 <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">SIGN UP</NavLink>
                            </div>

                            <Route exact path="/" component={SignUpForm}>

                            </Route>

                            <Route path="/sign-in" component={SignInForm}>

                            </Route>
                        </div>

                </div>
            </Router>
        );
    }
}

export default Signin;