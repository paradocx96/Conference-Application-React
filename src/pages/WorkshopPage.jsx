import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";
import WorkshopCommonGuide from "../components/workshop/WorkshopCommonGuide";
import WorkshopAllList from "../components/workshop/WorkshopAllList";
import {Container} from "react-bootstrap";
import WorkshopAllScheduledList from "../components/workshop/WorkshopAllScheduledList";
import WorkshopAllPendingList from "../components/workshop/WorkshopAllPendingList";
import UserService from "../services/UserService";

export default class WorkshopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signRole: "" // ADMIN, REVIEWER, SIGNED_USER, WORKSHOP_CONDUCTOR
        }
    }

    componentDidMount() {
        try {
            const user = UserService.getCurrentUser();
            if (user) {
                this.setState({
                    signRole: user.roles.includes("ROLE_USER_WORKSHOP") ? "ROLE_USER_WORKSHOP" : ""
                });
            }
        } catch (error) {

        }
    }


    render() {
        return (
            <Container>
                <h1 style={{webkitTextStroke: '2px black', webkitTextFillColor: 'white', fontWeight: 700}}
                    className="mt-5 mb-4">Workshop Page</h1>

                {
                    /**
                     * Only for sign as workshop conductor
                     */
                    this.state.signRole === "ROLE_USER_WORKSHOP" &&
                    <React.Fragment>
                        <WorkshopCommonGuide/>
                        <CreateWorkshop/>
                    </React.Fragment>
                }

                {
                    /**
                     * Only for sign as reviewer - view, download, approve
                     */
                    this.state.signRole === "REVIEWER" &&
                    <WorkshopAllPendingList/>
                }

                {/**  All signed users - view, download **/}
                <WorkshopAllScheduledList/>

                {
                    /**
                     * Only for sign as admin. - view, download, update/reschedule, delete
                     */
                    this.state.signRole === "ADMIN" &&
                    <WorkshopAllList/>
                }
            </Container>
        )
    }
}
