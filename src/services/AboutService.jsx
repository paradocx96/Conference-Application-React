// TODO: IT19180526 - Chandrasiri S A N L D

import axios from "axios";
import AuthHeader from "./AuthHeader";

// TODO: Based url for rest api
const COMMON_URL = "https://icaf-codewave-backend-api.herokuapp.com";
const COMMON_URL_LOCAL = "http://localhost:8080";
const ABOUT_API = "/about";
const ABOUT_API_BASE_URL = COMMON_URL + ABOUT_API;

export default new class AboutService {

    // TODO: Method for add About details to database
    postAbout(about) {
        return axios.post(ABOUT_API_BASE_URL + "/add", about, {headers: AuthHeader()});
    }

    // TODO: Method for get About details from database
    getAboutDetails() {
        return axios.get(ABOUT_API_BASE_URL + "/get");
    }

    //TODO: Method for update About details
    updateAboutDetails(id, about) {
        return axios.put(ABOUT_API_BASE_URL + "/update/" + id, about, {headers: AuthHeader()});
    }

    // TODO: Method for get About details By Id
    getAboutDetailsById(id) {
        return axios.get(ABOUT_API_BASE_URL + "/get-id/" + id, {headers: AuthHeader()});
    }

    // TODO: Method for Delete About details by ID
    deleteAboutDetailsById(id) {
        return axios.delete(ABOUT_API_BASE_URL + "/delete/" + id, {headers: AuthHeader()});
    }

}
