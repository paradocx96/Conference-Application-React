import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyNoteService from "../../services/KeyNoteService";

export default class ViewKeyNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null
        };
    }

    componentDidMount() {
        this.getKeyNotes();
    }

    getKeyNotes() {
        KeyNoteService.getKeyNotes()
            .then(response =>
                response.data.map(
                    keynote => ({
                        id: keynote.id,
                        speakername: keynote.speakername,
                        speakertype: keynote.speakertype,
                        organization: keynote.organization,
                        description: keynote.description,
                        status: keynote.status,
                        user: keynote.user
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

    render() {
        const {isLoading, keynotes} = this.state;
        return (
            <div>
                <h1>KeyNotes List</h1>
                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Speaker Name</th>
                            <th>Speaker Type</th>
                            <th>Organization</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            keynotes.map(keynote => {
                                const {id, speakername, speakertype, organization, description, status, user} = keynote;
                                return (
                                    <tr key={id}>
                                        <td>{speakername}</td>
                                        <td>{speakertype}</td>
                                        <td>{organization}</td>
                                        <td>{description}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td><Button>Action</Button></td>
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