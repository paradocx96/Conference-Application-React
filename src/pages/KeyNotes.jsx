import React, {Component} from "react";
import AddKeyNote from "../components/KeyNotes/AddKeyNote";
import ViewKeyNote from "../components/KeyNotes/ViewKeyNote";

export default class KeyNotes extends Component {

    render() {
        return(
            <div>
                <h1>KeyNotes</h1>
                <AddKeyNote/>
                <ViewKeyNote/>
            </div>
        )
    }
}