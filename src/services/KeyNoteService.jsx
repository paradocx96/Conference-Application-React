// TODO: IT19180526 - Chandrasiri S A N L D

import axios from "axios";
import AuthHeader from "./AuthHeader";

// TODO: Declare url for rest api
const COMMON_URL = "http://localhost:8080";
const KEYNOTE_API = "/keynote";
const KEYNOTE_API_BASE_URL = COMMON_URL + KEYNOTE_API;

export default new class KeyNoteService {

    // TODO: Method for add new Keynote to database
    postKeyNote(keynote) {
        return axios.post(KEYNOTE_API_BASE_URL + "/add", keynote);
    }

    // TODO: Method for get all Keynote from database
    getKeyNotes() {
        return axios.get(KEYNOTE_API_BASE_URL + "/get");
    }

    // TODO: Method for get Keynote by Status
    getKeyNotesByStatus(status) {
        return axios.get(KEYNOTE_API_BASE_URL + "/get-by-status/" + status);
    }

    // TODO: Method for get Keynote By Id
    getKeyNoteById(id) {
        return axios.get(KEYNOTE_API_BASE_URL + "/get-by-id/" + id);
    }

    // TODO: Method for update Keynote's Status
    updateKeyNoteStatus(id, status) {
        return axios.put(KEYNOTE_API_BASE_URL + "/update-status/" + id, status, {headers: AuthHeader()})
    }

    // TODO: Method for Delete a Keynote by ID
    deleteKeyNoteById(id) {
        return axios.delete(KEYNOTE_API_BASE_URL + "/delete/" + id, {headers: AuthHeader()});
    }

    //TODO: Method for update Keynote
    updateKeynote(keynote, id) {
        return axios.put(KEYNOTE_API_BASE_URL + "/update/" + id, keynote);
    }
}
