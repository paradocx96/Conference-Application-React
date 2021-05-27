import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';

import DashboardPanel from "../components/Dashboard/DashboardPanel";

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <DashboardPanel/>
                <div id="dashboard-example">
                    <h1>Dashboard Here</h1>
                </div>
            </div>
        )
    }
}