import axios from "axios";

// TODO: Declare url for rest api
const KEYNOTE_API_BASE_URL = "http://localhost:8080/keynote";

export default new class KeyNoteService {

    // TODO: Method for add new Keynote to database
    postKeyNote(keynote) {
        return axios.post(KEYNOTE_API_BASE_URL, keynote);
    }

}