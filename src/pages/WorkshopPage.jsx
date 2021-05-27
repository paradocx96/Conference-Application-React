import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";
import WorkshopCommonGuide from "../components/workshop/WorkshopCommonGuide";
import WorkshopList from "../components/workshop/WorkshopList";

export default class WorkshopPage extends Component {

    render() {
        return(
            <div>
                <h1>Workshop Page</h1>
                <WorkshopCommonGuide/>
                <CreateWorkshop/>
                <WorkshopList/>
            </div>
        )
    }
}