// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import AboutService from "../../services/AboutService";
import DashboardPanel from "../Dashboard/DashboardPanel";

class EditAbout extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state = {
            AboutList: [],
            id: '',
            selected: []
        }

        // For Buttons
        this.submitBtn = this.submitBtn.bind(this);
        this.resetBtn = this.resetBtn.bind(this);
        this.selectAboutValue = this.selectAboutValue.bind(this);
        this.assignHandlerId = this.assignHandlerId.bind(this);

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

    componentDidMount = async () => {
        await AboutService.getAboutDetails()
            .then(response => response.data)
            .then((data) => {
                this.setState({AboutList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    selectAboutValue = async (event) => {
        event.preventDefault();
        await AboutService.getAboutDetailsById(this.state.id)
            .then(response => {
                this.setState({
                    selected: response.data
                });
            }).then(data => {
                this.state.selected.map(item => (
                    this.setState({
                        description: item.description,
                        venue: item.venue,
                        date: item.date
                    })
                ))
            }).catch(error => {
                console.log(error.message);
            });
    }

    //TODO: Add About Details Function
    submitBtn = async (event) => {
        event.preventDefault();

        let aboutDetails = {
            description: this.state.description,
            venue: this.state.venue,
            date: this.state.date
        }

        await AboutService.updateAboutDetails(this.state.id, aboutDetails)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });
        this.resetBtn();
        await this.componentDidMount();
    }

    // TODO: Reset form values
    resetBtn = () => {
        this.setState(() => this.initialState)
    }

    // TODO: Set Values for state variables
    assignHandlerId = (event) => {
        this.setState({id: event.target.value});

        setTimeout(() => {
            this.selectAboutValue(event);
        }, 1000);
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <section id="subSection">
                    <div>
                        <h2>Search What you want to Edit:</h2>

                        <Form onSubmit={this.selectAboutValue.bind(this)}>
                            <Form.Group as={Row} controlId="aboutId">
                                <Col sm={2}>
                                    <Form.Label className={'font-weight-bold'}>Select one :</Form.Label>
                                </Col>

                                <Col sm={5}>
                                    <Form.Control required as="select" name={'id'}
                                                  value={this.state.id}
                                                  onChange={this.assignHandlerId}>

                                        <option>--Select--</option>
                                        {this.state.AboutList.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.venue}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>

                    <Form onSubmit={this.submitBtn.bind(this)} onReset={this.resetBtn.bind(this)}>
                        <Form.Group as={Row} controlId="NewsDescription">
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={5}>
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
                                <Button type="submit">Save</Button>{'\u00A0'}
                                <Button type="reset" className="btn-danger">Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </section>
            </div>
        );
    }
}

export default EditAbout;