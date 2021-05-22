import React, {Component} from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FooterBar extends Component {

    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Footer Start</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment Footer</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Subscribe</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Footer End</Card.Footer>
                </Card>
            </div>
        )
    }
}