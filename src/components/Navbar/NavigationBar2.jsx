import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar2 extends React.Component{

    render() {
        return (
            <div>
                <Navbar>
                    <Link to={'/'} className={'navbar-brand'} >ICAF</Link>

                    <Nav className={'mr-auto'}>
                        <Link to={'/keynote'} className={'nav-link'} >Keynotes</Link>
                        <Link to={'/news'} className={'nav-link'} >News</Link>
                        <Link to={'/workshop'} className={'nav-link'} >Workshop</Link>
                        <Link to={'/research'} className={'nav-link'} >Research</Link>
                        
                        <NavDropdown id={'basic-nav-dropdown'} title={'Authors'}>
                            <Link to={'/research'} className={'dropdown-item'}>Research</Link>
                            <Link to={'/downloads'} className={'dropdown-item'}>Downloads</Link>
                        </NavDropdown>

                    </Nav>
                </Navbar>
            </div>
        );
    }

}

export default NavigationBar2;