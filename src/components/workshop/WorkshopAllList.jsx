import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card} from "react-bootstrap";
import {getAllWorkshops} from "../../services/WorkshopService";

export default class WorkshopAllList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshopList: []
        }
    };

    renderWorkshopList = () => {
        if (this.state.workshopList.length === 0) {
            return <span className="text-danger">There is no any workshops. </span>
        } else {
            return this.state.workshopList.map((item, index) =>
                <WorkshopUnit workshop={item} key={index} signRole={"ADMIN"}/>);
        }
    }

    componentDidMount() {
        getAllWorkshops().then(value => this.setState({workshopList: value.data}));
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-4">
                <h2 className="px-2">All Workshops</h2>
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}
