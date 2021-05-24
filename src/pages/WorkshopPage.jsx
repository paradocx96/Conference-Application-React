import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";

export default class WorkshopPage extends Component {

    render() {
        return(
            <div>
                <h1>Workshop Page</h1>
                <CreateWorkshop/>
            </div>
        )
    }
}