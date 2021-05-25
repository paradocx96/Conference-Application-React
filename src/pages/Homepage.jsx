import React, {Component} from "react";
import ViewKeyNoteHomepage from "../components/KeyNotes/ViewKeyNoteHomepage";

export default class Homepage extends Component {

    render() {
        return(
            <div>
                <h1>Homepage</h1>
                <ViewKeyNoteHomepage/>
            </div>
        )
    }
}