// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Col, Container, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyNoteService from "../../services/KeyNoteService";

// TODO: Import Images
import UserPhoto from "../../assets/images/user.jpg";
import AboutService from "../../services/AboutService";

// TODO: Parcel Image Transform
// import UserPhoto from "url:../../assets/images/user.jpg?as=webp&width=150";

export default class KeyNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keynoteList: [],
        };
    }

    componentDidMount = async () => {
        await KeyNoteService.getKeyNotesByStatus("Active")
            .then(response => response.data)
            .then((data) => {
                this.setState({keynoteList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.keynoteList.length === 0 ?
                            'Loading...'
                            :
                            this.state.keynoteList.map((item) => (

                                <div className="col-md-4" key={item.id}>
                                    <Image src={UserPhoto} rounded/>
                                    <h3>{item.speakername}</h3>
                                    <p>{item.speakertype}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
        )
    }
}