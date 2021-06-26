import React from "react";
import CommonCheckAuth from "../../services/CommonCheckAuth";
import {Button, Card, Container} from "react-bootstrap";

class Payment extends React.Component{

    render() {
        return (
            <div>

                <style type={'text/css'}>
                    {
                        `
                        .color-back{
                            background-color: #035955;
                        }
                        `
                    }
                </style>

                <div className={'color-back'}>

                    <div className={'p-lg-5 container'}>

                <Card>
                    <Card.Header>
                        <Card.Title>Your Research Paper has been approved</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Make the payment to confirm your research paper presentation</Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <Button className={'btn btn-primary btn-block'}>Go to payment gateway</Button>
                    </Card.Footer>
                </Card>

                    </div>

                </div>

            </div>
        );
    }
}
export default CommonCheckAuth (Payment);