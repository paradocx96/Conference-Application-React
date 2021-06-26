import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card, Spinner} from "react-bootstrap";
import {getAllWorkshops} from "../../services/WorkshopService";

export default class WorkshopAllList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshopList: [],
            isLoading: true
        }
    };

    renderWorkshopList = () => {
        if (this.state.isLoading && this.state.workshopList.length === 0) {
            return <div style={{minHeight: '25vh', color: 'gray'}} className="text-center pt-5">
                <Spinner animation="border"/><span className="h3"> Loading</span>
            </div>
        } else if (this.state.workshopList.length === 0) {
            return <span className="text-danger">There is no any workshops. </span>
        } else {
            return this.state.workshopList.map((item, index) =>
                <WorkshopUnit workshop={item} key={index} signRole={"ADMIN"}/>);
        }
    }

    componentDidMount() {
        getAllWorkshops().then(value => this.setState({
            workshopList: value.data,
            iLoading: false
        })).then(() => console.log(this.state));
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
