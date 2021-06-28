// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

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
                    <h1>Contact Us</h1>
                    <Row>
                        <Col>1 of 2</Col>
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