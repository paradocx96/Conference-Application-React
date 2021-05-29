import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card} from "react-bootstrap";
import {getAllPendingWorkshop} from "../../services/WorkshopService";

export default class WorkshopAllPendingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshopList: []
        }
    };

    renderWorkshopList = () => {
        return this.state.workshopList.map((item, index) => <WorkshopUnit workshop={item} key={index}/>)
    }

    componentDidMount() {
        getAllPendingWorkshop().then(value => this.setState({workshopList: value.data}));
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-4">
                <h2 className="px-2">Pending Meetings</h2>
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}