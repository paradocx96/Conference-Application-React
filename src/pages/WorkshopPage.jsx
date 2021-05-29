import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";
import WorkshopCommonGuide from "../components/workshop/WorkshopCommonGuide";
import WorkshopAllList from "../components/workshop/WorkshopAllList";
import {Container} from "react-bootstrap";
import WorkshopAllScheduledList from "../components/workshop/WorkshopAllScheduledList";
import WorkshopAllPendingList from "../components/workshop/WorkshopAllPendingList";

export default class WorkshopPage extends Component {

    render() {
        return(
            <Container>
                <h1 className="mt-5 mb-4">Workshop Page</h1>

                {/**  Only for sign as workshop conductor **/}
                <WorkshopCommonGuide/>

                {/**  Only for sign as workshop conductor **/}
                <CreateWorkshop/>

                {/**  Only for sign as admin. - view, download, update/reschedule, delete **/}
                <WorkshopAllList/>

                {/**  Only for sign as reviewer - view, download, approve **/}
                <WorkshopAllPendingList/>

                {/**  All signed users - view, download **/}
                <WorkshopAllScheduledList/>
            </Container>
        )
    }
}