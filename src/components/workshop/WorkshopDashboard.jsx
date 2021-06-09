import React, {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";
import WorkshopAllList from "./WorkshopAllList";

export default class WorkshopDashboard extends Component {

    render() {
        return (
            <div>
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
