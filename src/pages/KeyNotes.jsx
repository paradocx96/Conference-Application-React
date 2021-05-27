import React, {Component} from "react";

import './../assets/styles/Keynote.css';
import ViewKeyNoteList from "../components/KeyNotes/ViewKeyNoteList";

export default class KeyNotes extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <div>
                <ViewKeyNoteList/>
            </div>
        )
    }
}