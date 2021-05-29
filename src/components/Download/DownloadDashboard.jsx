import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardPanel from "../Dashboard/DashboardPanel";
import DownloadDashboardList from "./DownloadDashboardList";
import DownloadDashboardListEditor from "./DownloadDashboardListEditor";


export default class DownloadDashboard extends Component {

    render() {
        return(
            <div>
                <DashboardPanel/>
                <section id="download">
                    <h1>Download Manager</h1>
                    <div className="adddownload">
                        <Link to={'/dashboard-download-add'} className={'btn btn-primary'} >Add Download Item</Link>
                    </div>
                    <div className="viedownload">
                        <DownloadDashboardList/>
                    </div>
                    <div className="viedownload">
                        <DownloadDashboardListEditor/>
                    </div>
                </section>
            </div>
        )
    }
}