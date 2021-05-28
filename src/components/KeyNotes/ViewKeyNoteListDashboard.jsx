import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Table, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyNoteService from "../../services/KeyNoteService";
import {Link} from "react-router-dom";
import {confirmAlert} from "react-confirm-alert";

export default class ViewKeyNoteListDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null,
            show: false
        };

        this.handleActivate = this.handleActivate.bind(this);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeleteProcess = this.handleDeleteProcess.bind(this);
    }

    componentDidMount = async () => {
        // this.getKeyNotes();
        await KeyNoteService.getKeyNotes()
            .then(response =>
                response.data.map(
                    keynote => ({
                        id: keynote.id,
                        speakername: keynote.speakername,
                        speakertype: keynote.speakertype,
                        organization: keynote.organization,
                        description: keynote.description,
                        status: keynote.status,
                        user: keynote.user,
                        datetime: keynote.datetime
                    }))
            )
            .then(keynotes => {
                this.setState({
                    keynotes,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    error,
                    isLoading: true
                })
            );
    }

    // getKeyNotes() {
    // }

    handleActivate = async (id) => {
        let value = {
            status: 'Active'
        }

        await KeyNoteService.updateKeyNoteStatus(id, value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    handleDeactivate = async (id) => {
        let value = {
            status: 'Deactive'
        }

        await KeyNoteService.updateKeyNoteStatus(id, value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    handleDelete = (id) => {
        confirmAlert({
            title: 'Do you want to delete Keynote?',
            message: 'This cannot be undone',
            buttons: [
                {
                    label: 'I understand. Delete.',
                    onClick: this.handleDeleteProcess.bind(this, id)
                },
                {
                    label: 'Do not delete',
                    onClick: this.handleDeleteCancel.bind(this)
                }
            ]
        })

    }

    handleDeleteProcess = async (id) => {
        await KeyNoteService.deleteKeyNoteById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }

    handleDeleteCancel = () => {
        alert("Deletion Cancelled.");
    }

    render() {
        const {isLoading, keynotes} = this.state;
        return (
            <div>
                <h1>KeyNotes List</h1>
                <div>
                    {/*<Button onClick={this.componentDidMount()}>Refresh</Button>*/}
                    {/*<Button onClick={this.componentDidMount()}>Add Keynote</Button>*/}
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Speaker Name</th>
                            <th>Speaker Type</th>
                            <th>Organization</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>User</th>
                            <th>Date & Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            keynotes.map(keynote => {
                                const {
                                    id,
                                    speakername,
                                    speakertype,
                                    organization,
                                    description,
                                    status,
                                    user,
                                    datetime
                                } = keynote;
                                return (
                                    <tr key={id}>
                                        <td>{speakername}</td>
                                        <td>{speakertype}</td>
                                        <td>{organization}</td>
                                        <td>{description}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>{datetime}</td>
                                        <td>
                                            <Button>Edit</Button>
                                        </td>
                                        <td>
                                            <tr>
                                                <Button
                                                    onClick={this.handleActivate.bind(this, keynote.id)}>Activate</Button>
                                            </tr>
                                            <tr>
                                                {'_______________'}
                                            </tr>
                                            <tr>
                                                <Button
                                                    onClick={this.handleDeactivate.bind(this, keynote.id)}>Deactivate</Button>
                                            </tr>
                                        </td>
                                        <td>
                                            <Button onClick={this.handleDeleteProcess.bind(this, keynote.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}