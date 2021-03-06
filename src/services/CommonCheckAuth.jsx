//Name : Malwatta H.G.
//ID : IT19240848
//Group : REG_WE_03

import React from "react";
import {Redirect} from 'react-router-dom';

import UserService from "./UserService";

const CommonCheckAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!UserService.getCurrentUser();
        if (isAuth) {
            return <Component />;
        } else {
            return <Redirect to="/sign-in" />;
        }
    };

    return AuthRoute;
};
export default CommonCheckAuth;