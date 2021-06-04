import React, { Component } from "react";
import axios from "axios";

const API_BACKEND_URL = "http://localhost:8080/api/";

class UserService extends Component{

    constructor(props) {
        super(props);

        this.state = {
            resMessage: ""
        }
    }

    // TODO: Function for registering user
    register(username, contactNo, email, password, userType) {
        return axios.post(API_BACKEND_URL + "signup", {
            username,
            contactNo,
            email,
            password,
            userType
        });
    }

}

export default new UserService();