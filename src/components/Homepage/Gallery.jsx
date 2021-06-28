// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Image, Row} from 'react-bootstrap';

// TODO: Import Images
// import Image1 from '../../assets/images/Gallery/Image1.jpg';
// import Image2 from '../../assets/images/Gallery/Image2.jpg';
// import Image3 from '../../assets/images/Gallery/Image3.jpg';
// import Image4 from '../../assets/images/Gallery/Image4.jpg';
// import Image5 from '../../assets/images/Gallery/Image5.jpg';

// TODO: Parcel Image Transform
import Image1 from 'url:../../assets/images/Gallery/Image1.jpg?as=webp';
import Image2 from 'url:../../assets/images/Gallery/Image2.jpg?as=webp';
import Image3 from 'url:../../assets/images/Gallery/Image3.jpg?as=webp';
import Image4 from 'url:../../assets/images/Gallery/Image4.jpg?as=webp';
import Image5 from 'url:../../assets/images/Gallery/Image5.jpg?as=webp';

export default class Gallery extends Component {

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
                            <Card>
                                <Card.Body>
                                    <Card.Img style={this.imageSize} variant="top" src={Image1}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img style={this.imageSize} variant="top" src={Image2}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img style={this.imageSize} variant="top" src={Image3}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img style={this.imageSize} variant="top" src={Image4}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img style={this.imageSize} variant="top" src={Image5}/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}