import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class SignUpForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>

                    {/*Full Name*/}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label> <br/>
                        <input type="text" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    {/*//Password*/}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label> <br/>
                        <input type="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    {/*// Email*/}
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-mail Address</label> <br/>
                        <input type="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    {/*acknowledgement*/}
                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input type="checkbox" className="FormField__Checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a
                            href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/" className="FormField__Link">I'm already a member</Link>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignUpForm;