// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

class Contact extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.submit = this.submit.bind(this);
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Contact Us</h1>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="Name">
                                    <Form.Control placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group controlId="Email">
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group controlId="Subject">
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>
                                <Form.Group controlId="Message">
                                    <Form.Control as="textarea" placeholder="Message" rows={5} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;