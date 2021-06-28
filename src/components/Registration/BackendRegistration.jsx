//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

import React, {Component} from "react";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import {isEmail} from "validator";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/Registration.css";
import UserService from "../../services/UserService";
import DashboardPanel from "../Dashboard/DashboardPanel";


// TODO: Validating registration form fields
const requiredField = data => {
    if (!data) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

// TODO: Validating registration Contact Number fields
const userContactNo = value => {
    if (value.length < 1 || value.length > 11) {
        return (
            <div className="alert alert-danger" role="alert">
                The contact number is wrong!.
            </div>
        );
    }
};

// TODO: Validating registration Email fields
const userEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

// TODO: Validating registration Username fields
const userUsername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

// TODO: Validating registration Password fields
const userPassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const userConfirmPassword = (value, props) => {
    if (props.expectedvalue !== value) {
        return (
            <div className="alert alert-danger" role="alert">
                The password is not matched!
            </div>
        );
    }
};

export default class Register extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        this.state = {
            username: "",
            contactNo: "",
            email: "",
            password: "",
            userType: "",
            successful: false,
            message: "",
            loading: false,
        };
    }

    // TODO: Set Values for state variables
    onChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    onChangeContactNo(event) {
        this.setState({
            contactNo: event.target.value
        });
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    onChangeUserType(event) {
        this.setState({
            userType: event.target.value
        });
    }

    onChangeConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        });
    }

    // TODO: Set Values for state variables
    handleRegister(event) {
        event.preventDefault();

        this.setState({
            message: "",
            successful: false,
            loading: true
        });

        // TODO: Validate register form fields
        this.form.validateAll();


        // TODO: Calling Registration Service function and check if there is any error
        if (this.checkBtn.context._errors.length === 0) {
            UserService.backendRegister(
                this.state.username,
                this.state.contactNo,
                this.state.email,
                this.state.password,
                this.state.userType,
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage,
                        loading: false,
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
            <div>
                <DashboardPanel/>
                <div className="auth-wrapper-register">
                    <div className="auth-inner-register">

                        <Form onSubmit={this.handleRegister} ref={check => {
                            this.form = check;
                        }}>

                            <h3>Backend Sign Up</h3>

                            {!this.state.successful && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Input
                                            type="text"
                                            placeholder="Enter username"
                                            className="form-control"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            validations={[requiredField, userUsername]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contactNo">Contact Number</label>
                                        <Input
                                            type="tel"
                                            placeholder="Enter mobile number"
                                            className="form-control"
                                            name="contactNo"
                                            value={this.state.contactNo}
                                            onChange={this.onChangeContactNo}
                                            validations={[requiredField, userContactNo]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Input
                                            type="text"
                                            placeholder="Enter email"
                                            className="form-control"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            validations={[requiredField, userEmail]}
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
                                            validations={[requiredField, userPassword]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Re-enter Password</label>
                                        <Input
                                            type="password"
                                            placeholder="Re-enter password"
                                            className="form-control"
                                            name="confirmPassword"
                                            expectedvalue={this.state.password}
                                            value={this.state.confirmPassword}
                                            onChange={this.onChangeConfirmPassword}
                                            validations={[requiredField, userConfirmPassword]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="userType">Select Type : </label>{' '}
                                        <select value={this.state.userType} onChange={this.onChangeUserType}
                                                className="dropdown">
                                            <option></option>
                                            <option value={"reviewer"}>Reviewer</option>
                                            <option value={"editor"}>Editor</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                                            {this.state.loading && (
                                                <span className="spinner-border spinner-border-sm"> </span>
                                            )}
                                            <span>Sign Up</span>
                                        </button>
                                    </div>

                                </div>
                            )}
                            <p className="forgot-password text-right">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>

                            {this.state.message && (
                                <div className="form-group">
                                    <div
                                        className={this.state.successful ? "alert alert-success" : "alert alert-danger"}
                                        role="alert">
                                        {this.state.message}
                                    </div>
                                </div>
                            )}
                            <CheckButton style={{display: "none"}} ref={check => {
                                this.checkBtn = check;
                            }}/>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
