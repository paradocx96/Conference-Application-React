//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

import React, { Component } from "react";
import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_BACKEND_URL = "https://icaf-codewave-backend-api.herokuapp.com/api/";
//const API_BACKEND_URL = "http://localhost:8080/api/";

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


    // TODO: Function for login user
     login(username, password) {
        return axios.post(API_BACKEND_URL + "signin",{
            username,
            password
        }).then(response => {
             if (response.data.accessToken) {
                 sessionStorage.setItem("user", JSON.stringify(response.data));
             }
             return response.data;
         });
    }

    //TODO: Get current user
    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    //TODO: Remove current user
    logout() {
        sessionStorage.removeItem("user");
    }

     backendRegister(username, contactNo, email, password, userType) {
        return axios.post(API_BACKEND_URL + "backend-signup", {
            username,
            contactNo,
            email,
            password,
            userType
        },{headers: AuthHeader()});
    }

    //TODO: Get All users
    getAllUserDetails(){
        return axios.get(API_BACKEND_URL + "get-all-users", {headers: AuthHeader()} );
    }
}

export default new UserService();