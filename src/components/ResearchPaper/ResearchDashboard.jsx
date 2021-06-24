import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";
import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class ResearchDashboard extends Component {

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
        return(
            <div>
                {
                    this.state.permission === 'notPermitted' ? <Redirect to={'/no-permission-admin'}/> :
                        <div></div>
                }

                <DashboardPanel/>
                <section id="subSection">
                <h1>Research Dashboard</h1>
                {/*  Do your things here  */}

                    <Link to={'/research/viewAll'}>View and Update status of Research Paper Entries</Link> <br/>
                    <Link to={'/research/deleteEntries'}>Delete Research Paper Entries</Link>
                </section>
            </div>
        )
    }
}

export default CommonCheckAuth(ResearchDashboard);