import React, {Component} from "react";
import WorkshopUnit from "./WorkshopUnit";
import {Card} from "react-bootstrap";

export default class WorkshopList extends Component {

    renderWorkshopList = () => {
        let ccs = [{name: "Works 1"}, {name: "Works 2"}, {name: "Works 3"}];
        return ccs.map((item, index) => <WorkshopUnit workshop={item} key={index}/>)
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-5">
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}