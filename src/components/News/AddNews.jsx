import React, {Component} from "react";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsService from "../../services/NewsService";

export default class AddNews extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    // TODO: Initializing default values
    initialState = {
        description: '',
        date: '',
        user: 'Admin'
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}