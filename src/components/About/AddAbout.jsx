// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
// import '/src/assets/styles/Dashboard.css';
import './../../assets/styles/Dashboard.css';
import AboutService from "../../services/AboutService";
import DashboardPanel from "../Dashboard/DashboardPanel";

class AddAbout extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;

        // For Buttons
        this.submitBtn = this.submitBtn.bind(this);
        this.resetBtn = this.resetBtn.bind(this);

        // For Form Data
        this.DescriptionHandler = this.DescriptionHandler.bind();
        this.VenueHandler = this.VenueHandler.bind();
        this.DateHandler = this.DateHandler.bind();
    }

    // TODO: Initializing default values
    initialState = {
        description: '',
        venue: '',
        date: ''
    }

    // TODO: Set Values for state variables
    DescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }

    VenueHandler = (event) => {
        this.setState({venue: event.target.value})
    }

    DateHandler = (event) => {
        this.setState({date: event.target.value})
    }

    //TODO: Add About Details Function
    submitBtn = async (event) => {
        event.preventDefault();

        let aboutDetails = {
            description: this.state.description,
            venue: this.state.venue,
            date: this.state.date
        }

        await AboutService.postAbout(aboutDetails)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
        this.resetBtn();
    }

    // TODO: Reset form values
    resetBtn = () => {
        this.setState(() => this.initialState)
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <section id="subSection">
                    <h2>Add About Details</h2>
                    <Form onSubmit={this.submitBtn.bind(this)} onReset={this.resetBtn.bind(this)}>

                        <Form.Group as={Row} controlId="NewsDescription">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={8}>
                                <Form.Control placeholder="Description.."
                                              as="textarea" rows={5}
                                              value={this.state.description}
                                              onChange={this.DescriptionHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="SpeakerName">
                            <Form.Label column sm={2}>Venue</Form.Label>
                            <Col sm={5}>
                                <Form.Control placeholder="Venue.."
                                              value={this.state.venue}
                                              onChange={this.VenueHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="NewsDate">
                            <Form.Label column sm={2}>Date</Form.Label>
                            <Col sm={5}>
                                <Form.Control type="date"
                                              value={this.state.date}
                                              onChange={this.DateHandler}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{span: 10, offset: 2}}>
                                <Button type="submit">Add Details</Button>{'\u00A0'}
                                <Button type="reset" className="btn-danger">Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </section>
            </div>
        );
    }
}

export default AddAbout;