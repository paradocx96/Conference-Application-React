// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Form, Button, Col, Row, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsService from "../../services/NewsService";
import DashboardPanel from "../Dashboard/DashboardPanel";

class EditNews extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <DashboardPanel/>
                <section id="subSection">
                    <h1>News</h1>

                    <div id="selectSection">
                        <h3>Select what you want to update</h3>

                    </div>

                    <div id="updateSection">

                    </div>
                </section>
            </div>
        )
    }
}

export default EditNews;