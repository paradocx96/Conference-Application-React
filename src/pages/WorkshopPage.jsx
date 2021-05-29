import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";
import WorkshopCommonGuide from "../components/workshop/WorkshopCommonGuide";
import WorkshopAllList from "../components/workshop/WorkshopAllList";
import {Container} from "react-bootstrap";

export default class WorkshopPage extends Component {

    render() {
        return(
            <Container>
                <h1 className="mt-5 mb-4">Workshop Page</h1>
                <WorkshopCommonGuide/>
                <CreateWorkshop/>
                <WorkshopAllList/>
            </Container>
        )
    }
}