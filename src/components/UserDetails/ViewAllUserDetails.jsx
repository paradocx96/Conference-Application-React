//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Redirect} from "react-router-dom";

import UserService from "../../services/UserService";
import CommonCheckAuth from "../../services/CommonCheckAuth";
import DashboardPanel from "../Dashboard/DashboardPanel";

class ViewAllUserDetails extends Component {

    // TODO: Initializing state values
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            isLoading: true,
            errors: null,
            show: false,
            currentUser: '',
            permission: 'notPermitted'
        };

        // Get current user
        const currentUser = UserService.getCurrentUser();

        // Set role of current user
        this.state.currentUser = currentUser;

        if (this.state.currentUser.roles == "ROLE_ADMIN") {
            this.state.permission = 'permitted';
            console.log("Role is Admin. Permitting to Dashboard!")
        }
        console.log("Permission : " + this.state.permission);
        console.log("Role: " + this.state.currentUser.roles);
    }

    //TODO: Function for get all News data from database
    componentDidMount = async () => {
        await UserService.getAllUserDetails()
            .then(response =>
                response.data.map(
                    user => ({
                        id: user.id,
                        username: user.username,
                        contactNo: user.contactNo,
                        email: user.email,
                        userType: user.userType

                    }))
            )
            .then(userList => {
                this.setState({
                    userList,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    error,
                    isLoading: true
                })
            );
    }

    render() {
        const {isLoading, userList} = this.state;
        return (
            <div>
                {
                    this.state.permission === 'notPermitted' ? <Redirect to={'/no-permission-admin'}/> :
                        <div></div>
                }
                <DashboardPanel/>
                <section id="subSection">

                    <h3>User List</h3>
                    <div>
                        <Table striped bordered hover variant="dark" size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>User Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {!isLoading ? (
                                userList.map(users => {
                                    const {id, username, contactNo, email, userType} = users;
                                    return (
                                        <tr key={id}>
                                            <td>{username}</td>
                                            <td>{contactNo}</td>
                                            <td>{email}</td>
                                            <td>{userType}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td>Loading...</td>
                                    <td>Loading...</td>
                                    <td>Loading...</td>
                                    <td>Loading...</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>

                </section>
            </div>
        )
    }
}

export default CommonCheckAuth(ViewAllUserDetails);