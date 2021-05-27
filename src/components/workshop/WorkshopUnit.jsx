import React, {Component} from "react";
import {Card} from "react-bootstrap";

export default class WorkshopUnit extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <Card className="mx-2 my-2 px-4 py-3">
                <span>{this.props.workshop.username}</span><br/>
                <span>{this.props.workshop.title}</span><br/>
                {this.props.workshop.courseCode !== '' && <><span>{this.props.workshop.courseCode}</span><br/></>}
                <span>{this.props.workshop.venue}</span><br/>
                <span>{this.props.workshop.date}</span><br/>
                <span>{this.props.workshop.startingTime}</span><br/>
                {this.props.workshop.endTime !== '' && <><span>{this.props.workshop.endTime}</span><br/></>}
                {this.props.workshop.description !== '' && <><span>{this.props.workshop.description}</span><br/></>}
            </Card>
        )
    }

}