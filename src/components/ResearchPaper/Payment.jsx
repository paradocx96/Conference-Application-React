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
                            background-color: #fff2c2;
                        }
                        `
                    }
                </style>

                <div className={'color-back'}>

                    <div className={'p-lg-5 container'}>

                <Card className={'bg-transparent'}>
                    <Card.Header className={'bg-primary'}>
                        <Card.Title>Your Research Paper has been approved</Card.Title>
                    </Card.Header>
                    <Card.Body className={'bg-dark text-white'}>
                        <Card.Text>Make the payment to confirm your research paper presentation</Card.Text>
                        <Card.Text>Payment Amount Rs.3000.00</Card.Text>
                    </Card.Body>

                    <Card.Footer className={'bg-dark text-white'}>
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