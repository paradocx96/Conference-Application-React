// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";
import NewsDashboardList from "./NewsDashboardList";
import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class NewsDashboard extends Component {

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
                    <h1>News</h1>
                    <div className="addnews">
                        <Link to={'/dashboard-news-add'} className={'btn btn-primary'}>Add News</Link> {'\u00A0'}
                        <Link to={'/dashboard-news-update'} className={'btn btn-primary'}>Update News</Link>
                    </div>
                    <div className="viewnews">
                        <NewsDashboardList/>
                    </div>
                </section>
            </div>
        )
    }
}

export default CommonCheckAuth(NewsDashboard);