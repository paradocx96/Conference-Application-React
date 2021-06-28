// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";

class Contact extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // TODO: Initializing default values
    initialState = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    // TODO: Assign form values to State variables
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // TODO: Submit form values
    onSubmit = (event) => {
        event.preventDefault();
        console.log('Email Send!');
        console.log('Name : ', this.state.name);
        console.log('Email : ', this.state.email);
        console.log('Subject : ', this.state.subject);
        console.log('Message : ', this.state.message);
        this.onReset();
    }

    // TODO: Reset form values
    onReset = () => {
        this.setState(() => this.initialState)
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="pt-5">
                        <h1>Contact Us</h1>
                    </div>
                    <Row>
                        <Col>
                            <div className="pt-5 pb-5">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Address</Card.Title>
                                        <Card.Text>Faculty of Computing,</Card.Text>
                                        <Card.Text>Sri Lanka Institute of Information Technology(SLIIT),</Card.Text>
                                        <Card.Text>Malabe,</Card.Text>
                                        <Card.Text>Sri Lanka.</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Telephone</Card.Title>
                                        <Card.Text>+94117544801</Card.Text>
                                        <Card.Title>Fax</Card.Title>
                                        <Card.Text>+94112413901</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Email</Card.Title>
                                        <Card.Text>info@sliit.lk</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className="pt-5 pb-5">
                                <Form onSubmit={this.onSubmit.bind(this)}>
                                    <Form.Group controlId="Name">
                                        <Form.Control placeholder="Your Name"
                                                      name="name"
                                                      value={this.state.name}
                                                      onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="Email">
                                        <Form.Control type="email"
                                                      placeholder="Your Email"
                                                      name="email"
                                                      value={this.state.email}
                                                      onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="Subject">
                                        <Form.Control placeholder="Subject"
                                                      name="subject"
                                                      value={this.state.subject}
                                                      onChange={this.onChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="Message">
                                        <Form.Control as="textarea"
                                                      placeholder="Message"
                                                      rows={5}
                                                      name="message"
                                                      value={this.state.message}
                                                      onChange={this.onChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;