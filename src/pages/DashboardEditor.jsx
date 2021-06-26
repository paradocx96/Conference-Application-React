// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/Dashboard.css'

import CommonCheckAuth from './../services/CommonCheckAuth';
import ViewKeyNoteDashboardListEditor from "../components/KeyNotes/ViewKeyNoteDashboardListEditor";
import NewsDashboardListEditor from "../components/News/NewsDashboardListEditor";
import DownloadDashboardListEditor from "../components/Download/DownloadDashboardListEditor";
import DashboardPanelEditor from "../components/Dashboard/DashboardPanelEditor";
import AddKeyNote from "../components/KeyNotes/AddKeyNote";
import AddNews from "../components/News/AddNews";
import AddDownload from "../components/Download/AddDownload";
import EditKeyNoteEditor from "../components/KeyNotes/EditKeyNoteEditor";
import EditNewsEditor from "../components/News/EditNewsEditor";

class DashboardEditor extends Component {

    render() {
        return (
            <div>
                <div id="dashboardEditor">
                    <DashboardPanelEditor/>

                    <section id="keynote">
                        <h2>KEYNOTES</h2>
                        <AddKeyNote/>
                        <EditKeyNoteEditor/>
                        <ViewKeyNoteDashboardListEditor/>
                    </section>

                    <section id="news">
                        <h2>NEWS</h2>
                        <AddNews/>
                        <EditNewsEditor/>
                        <NewsDashboardListEditor/>
                    </section>

                    <section id="download">
                        <h2>DOWNLOADS</h2>
                        <div className="addkeynote">
                            <AddDownload/>
                        </div>
                        <DownloadDashboardListEditor/>
                    </section>

                </div>
            </div>
        )
    }
}

export default CommonCheckAuth(DashboardEditor);