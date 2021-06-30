// TODO: IT19180526 - Chandrasiri S A N L D

import React from "react";
import {Card, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

// TODO: Import Images
import WarningLogo from '../../assets/images/Dashboard/warning.png';

// TODO: Parcel Image Transform
// import WarningLogo from 'url:../../assets/images/Dashboard/warning.png?as=webp&width=500&height=500';

class AdminPermissionMessage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Image src={WarningLogo} className={'align-items-center'} rounded/>
                <Card className={'bg-transparent align-content-center justify-content-center align-self-center'}>
                    <Card.Header className={'bg-danger text-white'}>No Permission</Card.Header>
                    <Card.Body className={'bg-warning'}>
                        <Card.Title>Administrator Permission Required!</Card.Title>
                        <Card.Title>You currently do not have permission to view this resources. Please login with proper permissions.</Card.Title>
                        <Card.Text>If you think this is an error please contact the Administrator.</Card.Text>
                        <Link className={'btn btn-primary'} to={'/'}>Home</Link>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default AdminPermissionMessage;