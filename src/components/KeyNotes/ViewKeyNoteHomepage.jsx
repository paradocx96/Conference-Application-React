import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyNoteService from "../../services/KeyNoteService";

export default class ViewKeyNoteHomepage extends Component {

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
                <div className="row">
                    {!isLoading ? (
                        keynotes.map(keynote => {
                            const {id, speakername, speakertype, organization, description, status, user} = keynote;
                            return (
                                <div className="col-md-4 border-primary border" key={id}>
                                    <h2>Heading</h2>
                                    <h3>{speakername}</h3>
                                    <p>{speakertype}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        )
    }
}