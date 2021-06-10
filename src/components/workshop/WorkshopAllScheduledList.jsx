import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card} from "react-bootstrap";
import {getAllScheduledWorkshop} from "../../services/WorkshopService";
import LoadingDiv from "./LoadingDiv";

export default class WorkshopAllScheduledList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshopList: [],
            isLoading: true
        }
    };

    renderWorkshopList = () => {
        if (this.state.workshopList.length === 0) {
            return <span className="text-danger">There is no any scheduled workshops.</span>
        } else {
            return this.state.workshopList.map((item, index) =>
                <WorkshopUnit workshop={item} key={index} signRole={"SIGNED_USER"}/>);
        }
    }

    componentDidMount() {
        getAllScheduledWorkshop().then(value => this.setState({workshopList: value.data, isLoading: false}));
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-4">
                <h2 className="px-2">Scheduled Workshops</h2>
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}
