import React from "react";
import {Col, Jumbotron, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class ReviewerDashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState;

        //get the role of current user
        const currentUser = UserService.getCurrentUser();

        //set the role of current user
        this.state.currentUser = currentUser;

        if(this.state.currentUser.roles == "ROLE_ADMIN"){
            //try redirecting here.
            this.state.permission ='permitted';
            console.log("Role is admin. Permitting")
        }
        else if(this.state.currentUser.roles == "ROLE_REVIEWER"){
            this.state.permission ='permitted';
            console.log("Role is reviewer. Permitting")
        }

        console.log("Permission : " + this.state.permission);
        console.log("Role: "+this.state.currentUser.roles);

    }

    initialState={
        currentUser:'',
        permission:'notPermitted'
    }

    componentDidMount() {
    }

    render() {
        const padding={
            padding:'10px'
        }
        return (
            <div style={padding}>

                {
                    this.state.permission ==='notPermitted'?
                        <Redirect to={'/no-permission'} />:
                        <div></div>
                }

                <Jumbotron className={'bg-dark text-white'}>
                    <h2>Reviewer Dashboard</h2>
                    <div>
                        <Row>
                            <Col>
                                <Link to={'/research/viewAll'} className={'btn btn-primary'}>Review research papers</Link>
                            </Col>

                            <Col>
                                <Link className={'btn btn-success'}>Review workshop submissions</Link>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>

            </div>
        );
    }

}
export default CommonCheckAuth (ReviewerDashboard);