// TODO: IT19180526 - Chandrasiri S A N L D

import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import UserService from "../../services/UserService";

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: undefined,
            adminDashboard: "",
            editorDashboard: "",
            reviewerDashboard: ""
        };
    }

    componentDidMount() {
        const user = UserService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                adminDashboard: user.roles.includes("ROLE_ADMIN"),
                editorDashboard: user.roles.includes("ROLE_EDITOR"),
                reviewerDashboard: user.roles.includes("ROLE_REVIEWER")
            });
        }
    }

    logout() {
        UserService.logout();
    }

    render() {

        const { currentUser, adminDashboard, editorDashboard, reviewerDashboard } = this.state;

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to={'/'} className={'navbar-brand'}>ICAF - 2021</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to={'/keynotes'} className={'nav-link'} >Keynotes</Link>
                            <Link to={'/news'} className={'nav-link'} >News</Link>
                            <Link to={'/workshop'} className={'nav-link'} >Workshop</Link>
                            <Link to={'/research'} className={'nav-link'} >Research</Link>

                            <NavDropdown title="Authors" id="collasible-nav-dropdown">
                                <Link to={'/research/operations'} className={'dropdown-item'}>Research</Link>
                                <NavDropdown.Divider/>
                                <Link to={'/downloads'} className={'dropdown-item'}>Downloads</Link>
                            </NavDropdown>

                            <Link to={'/contactus'} className={'nav-link'} >Contact Us</Link>
                        </Nav>
                        <Nav>
                            {currentUser ? (
                                <div className="navbar-nav ml-auto">

                                    <li className="nav-item">
                                        <Link className={'nav-link'} > {currentUser.username}</Link>
                                    </li>

                                    {adminDashboard && (
                                        <li className="nav-item">
                                            <Link to={'/dashboard'} className={'nav-link'} > Dashboard </Link>
                                        </li>
                                    )}
                                    {editorDashboard && (
                                        <li className="nav-item">
                                            <Link to={'/editor-dashboard'} className={'nav-link'} > Dashboard </Link>
                                        </li>
                                    )}
                                    {reviewerDashboard && (
                                        <li className="nav-item">
                                            <Link to={'/reviewer/dashboard'} className={'nav-link'} > Dashboard </Link>
                                        </li>
                                    )}

                                    <li className="nav-item">
                                        <a href="/sign-in" className="nav-link" onClick={this.logout}>
                                            Logout
                                        </a>
                                    </li>
                                </div>
                            ) : (

                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <label></label>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/sign-in"} className="nav-link"> Sign in </Link>
                                    </li>
                                </div>                                
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;