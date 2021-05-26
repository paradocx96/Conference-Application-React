import React, {Component} from "react";
import {Card} from "react-bootstrap";

export default class WorkshopUnit extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card className="mx-2 my-2 px-4 py-3">

                {this.props.workshop.name}
            </Card>
        )
    }
}