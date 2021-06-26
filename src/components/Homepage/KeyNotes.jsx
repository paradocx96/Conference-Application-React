// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserPhoto from "url:../../assets/images/user.jpg?as=webp&width=150";
import UserPhoto from "../../assets/images/user.jpg";

import KeyNoteService from "../../services/KeyNoteService";

export default class KeyNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keynotes: [],
            isLoading: true,
            errors: null
        };
    }

    imageSize = {
        width: 150
    }

    componentDidMount() {
        this.getKeyNotes();
    }

    getKeyNotes() {
        KeyNoteService.getKeyNotesByStatus("Active")
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
                                <div className="col-md-4" key={id}>
                                    <Image src={UserPhoto} style={this.imageSize} rounded/>
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