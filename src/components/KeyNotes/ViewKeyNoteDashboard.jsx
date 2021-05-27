import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';

import AddKeyNote from "./AddKeyNote";
import ViewKeyNote from "./ViewKeyNote";
import DashboardPanel from "../Dashboard/DashboardPanel";

export default class ViewKeyNoteDashboard extends Component {

    render() {
        return(
            <div>
                <DashboardPanel/>
                <section id="keynote">
                    <h1>KeyNotes</h1>
                    <div className="addkeynote">
                        <h1>Add Key Notes</h1>
                        <AddKeyNote/>
                    </div>
                    <div className="viewkeynote">
                        <ViewKeyNote/>
                    </div>
                </section>
            </div>
        )
    }
}