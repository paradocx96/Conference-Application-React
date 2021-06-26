// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsService from "../../services/NewsService";
import DashboardPanel from "../Dashboard/DashboardPanel";
import UserService from "../../services/UserService";
import KeyNoteService from "../../services/KeyNoteService";

class EditNews extends Component {

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
        this.getSelectedValue = this.getSelectedValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;

        if (this.state.currentUser.roles == "ROLE_ADMIN") {
            this.state.permission = 'permitted';
            console.log("Role is Admin. Permitting to Dashboard!")
        }
        console.log("Permission : " + this.state.permission);
        console.log("Role: " + this.state.currentUser.roles);
    }

    // TODO: Initializing default values
    initialState = {
        id: '',
        description: '',
        date: '',
        datetime: '',
        status: '',
        user: 'Admin'
    }

    componentDidMount = async () => {
        await NewsService.getNews()
            .then(response => response.data)
            .then((data) => {
                this.setState({getList: data});
                console.log(data)
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
        await NewsService.getNewsById(this.state.id)
            .then(response => {
                this.setState({
                    selected: response.data
                });
                console.log('response.data', response.data)
            }).then(data => {
                this.state.selected.map(data => (
                    this.setState({
                        id: data.id,
                        description: data.description,
                        date: data.date,
                        datetime: data.datetime,
                        status: data.status,
                        user: data.user
                    })
                ))
            }).catch(error => {
                console.log(error.message);
            });
    }

    // TODO: Implementation of Update KeyNote
    submitForm = async (event) => {
        event.preventDefault();

        let values = {
            id: this.state.id,
            description: this.state.description,
            date: this.state.date,
            datetime: this.state.datetime,
            status: 'Inactive',
            user: this.state.currentUser.username
        }

        console.log(values);

        // TODO: Save new Keynote in database
        await NewsService.updateNews(this.state.id, values)
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
                <DashboardPanel/>
                <section id="subSection">
                    <h1>News</h1>

                    <div id="selectSection">
                        <h3>Select what you want to update</h3>
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
                                                {item.description}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>

                    <div id="updateSection">

                    </div>
                </section>
            </div>
        )
    }
}

export default EditNews;