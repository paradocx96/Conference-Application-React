import React, {Component} from "react";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">RHNA Conference</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="/keynotes">Keynotes</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/workshop">Workshops</Nav.Link>
                            <Nav.Link href="/research">Research</Nav.Link>

                            <NavDropdown title="Authors" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/research">Research</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/downloads">Downloads</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/contactus">Contact Us</Nav.Link>
                            <Nav.Link eventKey={2} href="/signin">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;