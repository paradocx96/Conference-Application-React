import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";
import WorkshopAllList from "./WorkshopAllList";
import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class WorkshopDashboard extends Component {

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
                <section id="subSection" className="min-vh-100">
                    <h1>Workshop Dashboard</h1>

                    {/*  Do your things here  */}
                    {/*  TODO: Show workshop details here for Admin  */}
                    <WorkshopAllList/>
                </section>
            </div>
        )
    }
}

export default CommonCheckAuth(WorkshopDashboard);
