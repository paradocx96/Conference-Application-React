import React, {Component} from "react";
import CreateWorkshop from "../components/workshop/CreateWorkshop";
import WorkshopCommonGuide from "../components/workshop/WorkshopCommonGuide";
import WorkshopAllList from "../components/workshop/WorkshopAllList";
import {Container} from "react-bootstrap";
import WorkshopAllScheduledList from "../components/workshop/WorkshopAllScheduledList";
import WorkshopAllPendingList from "../components/workshop/WorkshopAllPendingList";

export default class WorkshopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signRole: "SIGNED_USER" // ADMIN, REVIEWER, SIGNED_USER, WORKSHOP_CONDUCTOR
        }
        console.log(this.state)
    }

    componentDidMount() {
        this.setState({signRole: "ADMIN"}); // TODO: SET THE SIGN ROLE HERE.
    }

    render() {
        return (
            <Container>
                <h1 style={{webkitTextStroke: '2px black', webkitTextFillColor: 'white',fontWeight: 700}}
                    className="mt-5 mb-4">Workshop Page</h1>

                {
                    /**
                     * Only for sign as workshop conductor
                     */
                    this.state.signRole === "WORKSHOP_CONDUCTOR" &&
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
