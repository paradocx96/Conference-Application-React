// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardPanel from "../Dashboard/DashboardPanel";
import AddNews from "./AddNews";
import UserService from "../../services/UserService";
import {Redirect} from "react-router-dom";

export default class AddNewsAdmin extends Component {

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
                <AddNews/>
            </div>
        )
    }
}