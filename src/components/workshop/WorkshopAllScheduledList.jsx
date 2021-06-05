import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card} from "react-bootstrap";
import {getAllScheduledWorkshop} from "../../services/WorkshopService";

export default class WorkshopAllScheduledList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshopList: []
        }
    };

    renderWorkshopList = () => {
        return this.state.workshopList.map((item, index) =>
            <WorkshopUnit workshop={item} key={index} signRole={"SIGNED_USER"}/>)
    }

    componentDidMount() {
        getAllScheduledWorkshop().then(value => this.setState({workshopList: value.data}));
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-4">
                <h2 className="px-2">Scheduled Meetings</h2>
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}