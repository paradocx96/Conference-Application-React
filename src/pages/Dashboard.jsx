// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';
import CommonCheckAuth from './../services/CommonCheckAuth';
import DashboardPanel from "../components/Dashboard/DashboardPanel";
import AboutDashboard from "../components/About/AboutDashboard";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <DashboardPanel/>
                <div id="subSection">
                    <AboutDashboard/>
                </div>
            </div>
        )
    }
}

export default CommonCheckAuth(Dashboard);