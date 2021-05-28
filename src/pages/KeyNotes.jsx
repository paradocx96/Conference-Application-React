import React, {Component} from "react";

import './../assets/styles/Keynote.css';
import ViewKeyNoteSection from "../components/KeyNotes/ViewKeyNoteSection";

export default class KeyNotes extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <div>
                <ViewKeyNoteSection/>
            </div>
        )
    }
}