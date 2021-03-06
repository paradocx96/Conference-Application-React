//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

import React, { Component } from "react";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import UserService from "../../services/UserService";
import "../../assets/styles/Login.css";
import {Link}  from "react-router-dom";

// TODO: create to validate form fields
const requiredField = data => {

    if (!data) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    // TODO: Set Values for state variables
    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    // TODO: Set Values for state variables
    handleLogin(event) {
        event.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        // TODO: Validate Login form fields
        this.form.validateAll();

        // TODO: Calling Login Service function and check if user is available or not
        if (this.checkBtn.context._errors.length === 0) {
            UserService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/");
                    window.location.reload();
                },
                error => {
                    const userMessage = "Username or password incorrect!";
                    const resMessage = (error.response && error.response.data.message && error.response.data) || userMessage || error.message || error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    // TODO: Display Website
    render() {
        return (

            <div className="auth-wrapper-login">
                <div className="auth-inner-login">

                    <Form onSubmit={this.handleLogin} ref={check => {this.form = check; }}>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                placeholder="Enter username"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[requiredField]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                placeholder="Enter password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[requiredField]}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <br></br>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"> </span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        <p className="forgot-password text-right">
                            Are you not register yet <Link to="/sign-up">sign up?</Link>
                        </p>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger text-center" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={check => {this.checkBtn = check;}}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}
