// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Image, Row} from 'react-bootstrap';

// TODO: Import Images
// import SLIIT from '../../assets/images/Sponsored/sliit.png';
// import ieee1 from '../../assets/images/Sponsored/ieee1.jpg';
// import ieee2 from '../../assets/images/Sponsored/ieee2.png';
// import ieee3 from '../../assets/images/Sponsored/ieee3.png';

// TODO: Parcel Image Transform
import SLIIT from 'url:../../assets/images/Sponsored/sliit.png?as=webp';
import ieee1 from 'url:../../assets/images/Sponsored/ieee2.png?as=webp';
import ieee2 from 'url:../../assets/images/Sponsored/ieee1.jpg?as=webp';
import ieee3 from 'url:../../assets/images/Sponsored/ieee3.png?as=webp';

export default class Sponsored extends Component {

    constructor(props) {
        super(props);
    }

    imageSize = {
        width: 300,
        height: 250
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                        </Col>

                        <Col>

                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={ieee1}/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>

                        </Col>

                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>

                        <Col>

                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={SLIIT}/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>

                        </Col>

                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}