// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default class FooterBar extends Component {

    FooterStyle = {
        background: '#2c2c2d',
        color: 'white'
    }

    FooterStyleUnder = {
        background: '#2c2c2d',
        color: 'white',
        'text-align': 'center',
    }

    linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    }

    ulStyle = {
        'list-style-type': 'square'
    }

    render() {
        return (
            <div>
                <div style={this.FooterStyle}>
                    <Container>
                        <Row className={'pt-5'}>
                            <Col>
                                <h4>I C A F - 2 0 2 1</h4>
                                <br/>
                                <h6>Address</h6>
                                <p>Faculty of Computing,<br/>
                                    Sri Lanka Institute of Information Technology,<br/>
                                    Sri Lanka</p>
                                <h6>Telephone</h6>
                                <p>+94117544801</p>
                                <h6>Fax</h6>
                                <p>+94112413901</p>
                                <h6>Email</h6>
                                <p>info@sliit.lk</p>
                            </Col>
                            <Col>
                                <h4>Quick links</h4>
                                <ul style={this.ulStyle}>
                                    <li>
                                        <Link to={'/keynotes'} style={this.linkStyle}>Keynote</Link>
                                    </li>
                                    <li>
                                        <Link to={'/news'} style={this.linkStyle}>News</Link>
                                    </li>
                                    <li>
                                        <Link to={'/workshop'} style={this.linkStyle}>Workshop</Link>
                                    </li>
                                    <li>
                                        <Link to={'/research'} style={this.linkStyle}>Research</Link>
                                    </li>
                                    <li>
                                        <Link to={'/downloads'} style={this.linkStyle}>Download</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'} style={this.linkStyle}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to={'/sign-in'} style={this.linkStyle}>Sign-In</Link>
                                    </li>
                                    <li>
                                        <Link to={'/sign-up'} style={this.linkStyle}>Sign-Up</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <h4>About ICAF</h4>
                                <ul style={this.ulStyle}>
                                    <li>
                                        <Link to={'/'} style={this.linkStyle}>More Details</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'} style={this.linkStyle}>Contact Us</Link>
                                    </li>
                                </ul>

                                <h4>Social Media</h4>
                                <ul style={this.ulStyle}>
                                    <li>
                                        <Link to={'/'} style={this.linkStyle}>Facebook</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} style={this.linkStyle}>Twitter</Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={this.FooterStyleUnder}>
                    <Container>
                        <Row>
                            <Col>
                                <p>©2021 SLIIT, developed by CODEWAVE. All Rights Reserved.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    {/*<Card>*/}
                    {/*    <Card.Header className="text-left">Contact Us</Card.Header>*/}
                    {/*    <Card.Body className="text-left">*/}
                    {/*        <Card.Title>Faculty of Computing, Sri Lanka Institute of Information Technology, Sri Lanka</Card.Title>*/}
                    {/*        <Card.Text>Telephone: +94 11 754 4801</Card.Text>*/}
                    {/*        <Card.Text>Fax: +94 11 241 3901</Card.Text>*/}
                    {/*        <Card.Text>Email: info@sliit.lk</Card.Text>*/}
                    {/*    </Card.Body>*/}
                    {/*    <Card.Footer className="text-center">©2021 SLIIT, developed by CODEWAVE. All Rights Reserved.</Card.Footer>*/}
                    {/*</Card>*/}
                </div>
            </div>
        )
    }
}