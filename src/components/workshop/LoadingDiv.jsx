import {Component} from "react";
import {Spinner} from "react-bootstrap";

export default class LoadingDiv extends Component{
    render() {
        return(
            <div style={{minHeight: '25vh'}}>
                <Spinner animation="border" /> Loading
            </div>
        )
    }
}
