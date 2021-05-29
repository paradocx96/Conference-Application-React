import axios from "axios";

// TODO: Declare url for rest api
const DOWNLOAD_API_BASE_URL = "http://localhost:8080/download";

export default new class DownloadService {

    // TODO: Method for add new Download Item to database
    postKeyNote(download) {
        return axios.post(DOWNLOAD_API_BASE_URL, download);
    }

    // TODO: Method for get all Download Items from database
    getDownloadItems() {
        return axios.get(DOWNLOAD_API_BASE_URL);
    }

    //TODO: Method for update Download item Status
    updateStatusByFormValue(status) {
        return axios.put(DOWNLOAD_API_BASE_URL + "/update-status", status);
    }

    //TODO: Method for delete Download item from database
    deleteDownloadItemById(id) {
        return axios.delete(DOWNLOAD_API_BASE_URL + "/" + id);
    }

    //TODO: Method for Download file by Id
    getDownloadFileById(id) {
        return axios.post("http://localhost:8080/download/download-id/" + id, {responseType:'blob'})
    }
}