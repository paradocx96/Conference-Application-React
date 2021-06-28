// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Card, Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ImportantDates extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card bg={'secondary'} text={'white'}>
                                <Card.Body>
                                    <Card.Text><b>01st MAY 2021</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'primary'}>
                                <Card.Body>
                                    <Card.Text><b>REGISTRATION (OPEN)</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'primary'}>
                                <Card.Body>
                                    <Card.Text><b>PAPER SUBMISSION (OPEN)</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={'secondary'} text={'white'}>
                                <Card.Body>
                                    <Card.Text><b>05th MAY 2021</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                            <Card bg={'secondary'} text={'white'}>
                                <Card.Body>
                                    <Card.Text><b>5th JULY 2021</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'primary'}>
                                <Card.Body>
                                    <Card.Text><b>PAPER SUBMISSION (CLOSE)</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'primary'}>
                                <Card.Body>
                                    <Card.Text><b>REGISTRATION (CLOSE)</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={'secondary'} text={'white'}>
                                <Card.Body>
                                    <Card.Text><b>10th JULY 2021</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                            <Card bg={'secondary'} text={'white'}>
                                <Card.Body>
                                    <Card.Text><b>15th, 16th JULY 2021</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={'dark'} text={'white'} border={'primary'}>
                                <Card.Body>
                                    <Card.Text><b>CONFERENCE</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}