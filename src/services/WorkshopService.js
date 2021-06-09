import axios from "axios";
import FileDownload from "js-file-download";
import AuthHeader from "./AuthHeader";

const WORKSHOP_API_URL = 'http://localhost:8080/workshop';

export function createWorkshop(workshop) {
    console.log(workshop);
    return axios.post(WORKSHOP_API_URL + '/add', workshop, {headers: AuthHeader()})
        .then(response => {
            if (response.status === 201) {
                alert("Successfully created");
            }
        }).catch(error => alert(error));
}

export function getAllWorkshops() {
    return  axios.get(WORKSHOP_API_URL + '/all-workshops', {headers: AuthHeader()});
}

export function getAllScheduledWorkshop() {
    return axios.get(WORKSHOP_API_URL + '/scheduled-workshops', {headers: AuthHeader()});
}

export function getAllPendingWorkshop() {
    return axios.get(WORKSHOP_API_URL + '/pending-workshops', {headers: AuthHeader()});
}

export function downloadDocumentByWorkshop(formData) {
    console.log(formData);
    return axios.post(WORKSHOP_API_URL + '/download-documents', formData, {
        headers: AuthHeader(),
        responseType: 'blob'
    })
        .then((response) => {
            let headline = response.request.getResponseHeader('Content-Disposition');
            let startFileNameIndex = headline.indexOf('=') + 1;
            let endFileNameIndex = headline.lastIndexOf('"');
            let filename = headline.substring(startFileNameIndex, endFileNameIndex);
            FileDownload(response.data, filename + ".pdf");
        })
}

export function deleteWorkshop(formData) {
    return axios.post(WORKSHOP_API_URL + '/delete', formData, {headers: AuthHeader()})
        .then(response => {
            if (response.status === 201) {
                alert("Successfully deleted workshop");
            }
        }).catch(error => alert(error));
}

export function approveWorkshop(formData) {
    return axios.post(WORKSHOP_API_URL + '/approve', formData, {headers: AuthHeader()})
        .then(response => {
            if (response.status === 201) {
                alert("Successfully approved the workshop");
            }
        }).catch(error => alert(error));
}

export function updateWorkshop(formData) {
    return axios.put(WORKSHOP_API_URL + '/update', formData, {headers: AuthHeader()})
        .then(response => {
            if (response.status === 201) {
                alert("Successfully updated the workshop");
            }
        }).catch(error => alert(error));
}
