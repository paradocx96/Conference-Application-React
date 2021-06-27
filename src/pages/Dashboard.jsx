// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/Dashboard.css';
import DashboardPanel from "../components/Dashboard/DashboardPanel";
import AboutDashboard from "../components/About/AboutDashboard";
import UserService from "../services/UserService";
import CommonCheckAuth from "../services/CommonCheckAuth";
import {Redirect} from "react-router-dom";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser:'',
            permission:'notPermitted'
        };

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;

        if(this.state.currentUser.roles == "ROLE_ADMIN"){
            this.state.permission ='permitted';
            console.log("Role is Admin. Permitting to Dashboard!")
        }
        console.log("Permission : " + this.state.permission);
        console.log("Role: "+this.state.currentUser.roles);
    }

    render() {
        return (
            <div>
                {
                    this.state.permission ==='notPermitted' ? <Redirect to={'/no-permission-admin'} /> :
                        <div></div>
                }
                <DashboardPanel/>
                <div id="subSection">
                    <AboutDashboard/>
                </div>
            </div>
        )
    }
}

export default CommonCheckAuth(Dashboard);