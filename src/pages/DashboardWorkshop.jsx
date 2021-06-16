import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/Dashboard.css'

import CommonCheckAuth from './../services/CommonCheckAuth';

class DashboardWorkshop extends Component {

    render() {
        return (
            <div className="container">
                <h2>Workshop Dashboard</h2>
            </div>
        )
    }
}

export default CommonCheckAuth(DashboardWorkshop);