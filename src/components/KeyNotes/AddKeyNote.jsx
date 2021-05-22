import React, {Component} from "react";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddKeyNote extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group as={Row} controlId="SpeakerName">
                            <Form.Label column sm={2}>
                                Speaker Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker Name"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerType">
                            <Form.Label column sm={2}>
                                Speaker Type
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker Type"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerOrganization">
                            <Form.Label column sm={2}>
                                Speaker's Organization
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="Speaker's Organization"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerDescription">
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={10}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit">Add KeyNote</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}