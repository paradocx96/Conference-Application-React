// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import UserService from "../../services/UserService";
import DownloadService from "../../services/DownloadService";

class EditDownloadEditor extends Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
        this.state = {
            getList: [],
            selected: [],
            currentUser: '',
            permission: 'notPermitted'
        }

        this.onChange = this.onChange.bind(this);
        this.assignHandlerId = this.assignHandlerId.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.FileHandler = this.FileHandler.bind(this);

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;
    }

    // TODO: Initializing default values
    initialState = {
        id: '',
        name: '',
        type: '',
        file: null,
        status: '',
        user: 'Admin'
    }

    componentDidMount = async () => {
        await DownloadService.getDownloadItems()
            .then(response => response.data)
            .then((data) => {
                this.setState({getList: data});
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
    FileHandler = async (event) => {
        event.preventDefault();
        await this.setState({file: event.target.files[0]});
    }

    // TODO: Set Values for state variables
    assignHandlerId = (event) => {
        this.setState({id: event.target.value});
    }

    // TODO: Implementation of Update KeyNote
    submitForm = async (event) => {
        event.preventDefault();
        console.log('SELECTED ID :', this.state.id);

        const formValue = new FormData();
        formValue.append("file", this.state.file);
        formValue.append("name", this.state.name);
        formValue.append("type", this.state.type);
        formValue.append("user", this.state.currentUser.username);
        formValue.append("status", "Inactive");
        formValue.append("id", this.state.id);

        if (formValue == null) {
            console.log('Form value is NULL!!!');
        } else {
            await DownloadService.putDownloadDetails(formValue)
                .then(response => response.data)
                .then((data) => {
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.resetForm();
            await this.componentDidMount();
        }
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
                        <h3>Update Download Item</h3>
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
                                        {this.state.getList.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
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

                            <Form.Group as={Row} controlId="name">
                                <Form.Label column sm={2}>File Name</Form.Label>
                                <Col sm={5}>
                                    <Form.Control required placeholder="File Name"
                                                  name="name"
                                                  value={this.state.name}
                                                  onChange={this.onChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="type">
                                <Form.Label column sm={2}>File Type</Form.Label>
                                <Col sm={5}>
                                    <Form.Control required as="select"
                                                  name="type"
                                                  value={this.state.type}
                                                  onChange={this.onChange}>
                                        <option>-Select-</option>
                                        <option>Research Paper Template</option>
                                        <option>Workshop PowerPoint Templates</option>
                                        <option>Other Templates</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="file">
                                <Form.Label column sm={2}>Select File</Form.Label>
                                <Col sm={10}>
                                    <Form.File
                                        className={'position-relative'}
                                        required
                                        name="file"
                                        id="file"
                                        onChange={this.FileHandler.bind(this)}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{span: 10, offset: 2}}>
                                    <Button type="submit">Save</Button>{'\u00A0'}
                                    <Button type="reset" className="btn-danger">Reset</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </section>
            </div>
        );
    }
}

export default EditDownloadEditor;