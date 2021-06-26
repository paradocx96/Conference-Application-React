// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";
import ViewKeyNoteDashboardList from "./ViewKeyNoteDashboardList";
import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class ViewKeyNoteDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: '',
            permission: 'notPermitted'
        };

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;

        if (this.state.currentUser.roles == "ROLE_ADMIN") {
            this.state.permission = 'permitted';
            console.log("Role is Admin. Permitting to Dashboard!")
        }
        console.log("Permission : " + this.state.permission);
        console.log("Role: " + this.state.currentUser.roles);
    }

    render() {
        return (
            <div>
                {
                    this.state.permission === 'notPermitted' ? <Redirect to={'/no-permission-admin'}/> :
                        <div></div>
                }
                <DashboardPanel/>
                <section id="subSection">
                    <h1>KeyNotes</h1>
                    <div className="addkeynote">
                        <Link to={'/dashboard-keynotes-add'} className={'btn btn-primary'}>Add Keynote</Link> {'\u00A0'}
                        <Link to={'/dashboard-keynotes-update'} className={'btn btn-primary'}>Update Keynote</Link>
                    </div>
                    <div className="viewkeynote">
                        <ViewKeyNoteDashboardList/>
                    </div>
                </section>
            </div>
        )
    }
}

export default CommonCheckAuth(ViewKeyNoteDashboard);