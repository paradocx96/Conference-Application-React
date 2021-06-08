import React, {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPanel from "../Dashboard/DashboardPanel";

export default class ResearchDashboard extends Component {

    render() {
        return(
            <div>
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