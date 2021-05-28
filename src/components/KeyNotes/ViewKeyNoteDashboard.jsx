import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';

import ViewKeyNoteListDashboard from "./ViewKeyNoteListDashboard";
import DashboardPanel from "../Dashboard/DashboardPanel";

export default class ViewKeyNoteDashboard extends Component {

    render() {
        return(
            <div>
                <DashboardPanel/>
                <section id="keynote">
                    <h1>KeyNotes</h1>
                    <div className="addkeynote">
                        <Link to={'/dashboard-keynotes-add'} className={'btn btn-primary'} >Add Keynote</Link>
                    </div>
                    <div className="viewkeynote">
                        <ViewKeyNoteListDashboard/>
                    </div>
                </section>
            </div>
        )
    }
}