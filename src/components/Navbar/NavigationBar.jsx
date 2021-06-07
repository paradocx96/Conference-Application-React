// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import UserService from "../../services/UserService";

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {currentUser: undefined};
    }

    componentDidMount() {
        const user = UserService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: user
            });
        }
    }

    logout(){
        UserService.logout();
    }

    render() {

        const {currentUser} = this.state;

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Link to={'/'} className={'navbar-brand'}>ICAF - 2021</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to={'/keynotes'} className={'nav-link'} >Keynotes</Link>
                            <Link to={'/news'} className={'nav-link'} >News</Link>
                            <Link to={'/workshop'} className={'nav-link'} >Workshop</Link>
                            <Link to={'/research'} className={'nav-link'} >Research</Link>
                            <NavDropdown title="Authors" id="collasible-nav-dropdown">
                                <Link to={'/research'} className={'dropdown-item'}>Research</Link>
                                <NavDropdown.Divider/>
                                <Link to={'/downloads'} className={'dropdown-item'}>Downloads</Link>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to={'/contactus'} className={'nav-link'} >Contact Us</Link>
                            {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className={'nav-link'} > {currentUser.username}</Link>
                                    </li>
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
                                        <Link to={"/sign-in"} className="nav-link">
                                            Sign in
                                        </Link>
                                    </li>
                                </div>
                            // <Link to={'/sign-in'} className={'nav-link'} >Sign in</Link>
                            )}
                            {/*<NavDropdown title="" id="collasible-nav-dropdown">*/}
                            {/*    <Link to={'/dashboard'} className={'dropdown-item'}>Dashboard</Link>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <Link to={'/sign-out'} className={'dropdown-item'}>Sign Out</Link>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;