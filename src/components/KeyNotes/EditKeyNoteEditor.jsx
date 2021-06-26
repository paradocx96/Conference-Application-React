// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyNoteService from "../../services/KeyNoteService";
import DashboardPanel from "../Dashboard/DashboardPanel";
import UserService from "../../services/UserService";

class EditKeyNoteEditor extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state = {
            KeynoteList: [],
            selected: [],
            currentUser: ''
        }

        this.onChange = this.onChange.bind(this);
        this.assignHandlerId = this.assignHandlerId.bind(this);
        this.getSelectedValue = this.getSelectedValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;
    }

    initialState = {
        id: '',
        speakername: '',
        speakertype: '',
        organization: '',
        description: '',
        status: ''
    }

    componentDidMount = async () => {
        await KeyNoteService.getKeyNotes()
            .then(response => response.data)
            .then((data) => {
                this.setState({KeynoteList: data});
            }).catch(error =>
                console.log(error.message)
            );
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // TODO: Set Values for state variables
    assignHandlerId = (event) => {
        this.setState({id: event.target.value});

        setTimeout(() => {
            this.getSelectedValue();
        }, 1000);
    }

    getSelectedValue = async () => {
        await KeyNoteService.getKeyNoteById(this.state.id)
            .then(response => {
                this.setState({
                    selected: response.data
                });
            }).then(data => {
                this.state.selected.map(data => (
                    this.setState({
                        speakername: data.speakername,
                        speakertype: data.speakertype,
                        organization: data.organization,
                        description: data.description,
                        status: data.status
                    })
                ))
            }).catch(error => {
                console.log(error.message);
            });
    }

    // TODO: Implementation of Update KeyNote
    submitForm = async (event) => {
        event.preventDefault();

        let keynote = {
            id: this.state.id,
            speakername: this.state.speakername,
            speakertype: this.state.speakertype,
            organization: this.state.organization,
            description: this.state.description,
            status: 'Inactive',
            user: this.state.currentUser.username
        }

        console.log(keynote);

        // TODO: Save new Keynote in database
        await KeyNoteService.updateKeynote(keynote, this.state.id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error.message)
            });
        this.resetForm();
        await this.componentDidMount();
    }

    // TODO: Reset form values
    resetForm = () => {
        this.setState(() => this.initialState)
    }


    render() {
        return (
            <div>
                <section id="subSection">
                    <div id="selectSection">
                        <h3>Update Keynotes</h3>

                        <Form>
                            <Form.Group as={Row} controlId="Id">
                                <Col sm={2}>
                                    <Form.Label className={'font-weight-bold'}>Select one : </Form.Label>
                                </Col>

                                <Col sm={5}>
                                    <Form.Control required as="select" name={'id'}
                                                  value={this.state.id}
                                                  onChange={this.assignHandlerId}>

                                        <option>--Select--</option>
                                        {this.state.KeynoteList.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.speakername}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>

                    <div id="updateSection">
                        <Form onSubmit={this.submitForm.bind(this)}
                              onReset={this.resetForm.bind(this)}>
                            <Form.Group as={Row} controlId="SpeakerName">
                                <Form.Label column sm={2}>
                                    Speaker Name
                                </Form.Label>
                                <Col sm={5}>
                                    <Form.Control placeholder="Speaker Name"
                                                  name="speakername"
                                                  value={this.state.speakername}
                                                  onChange={this.onChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="SpeakerType">
                                <Form.Label column sm={2}>
                                    Speaker Type
                                </Form.Label>
                                <Col sm={5}>
                                    <Form.Control placeholder="Speaker Type"
                                                  name="speakertype"
                                                  value={this.state.speakertype}
                                                  onChange={this.onChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="SpeakerOrganization">
                                <Form.Label column sm={2}>
                                    Speaker's Organization
                                </Form.Label>
                                <Col sm={5}>
                                    <Form.Control placeholder="Speaker's Organization"
                                                  name="organization"
                                                  value={this.state.organization}
                                                  onChange={this.onChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="SpeakerDescription">
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows={10}
                                                  name="description"
                                                  value={this.state.description}
                                                  onChange={this.onChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="SpeakerStatus">
                                <Form.Label column sm={2}>
                                    Status
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Label column sm={2}>
                                        {this.state.status}
                                    </Form.Label>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{span: 10, offset: 2}}>
                                    <Button type="submit">Save</Button>{'\u00A0'}
                                    <Button type="reset">Reset</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}

export default EditKeyNoteEditor;