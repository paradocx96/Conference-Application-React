import axios from "axios";
import FileDownload from "js-file-download";

const WORKSHOP_API_URL = 'http://localhost:5000/workshop';

export function createWorkshop(workshop) {
    console.log(workshop);
    return axios.post(WORKSHOP_API_URL, workshop, {
    })
        .then(response => {
            if(response.status === 201){
                alert("Successfully created");
            }
        }).catch(error => alert(error));
}

export function getAllWorkshops() {
    return axios.get(WORKSHOP_API_URL);
}

export function getAllScheduledWorkshop() {
    return axios.get(WORKSHOP_API_URL + '/scheduled-workshops');
}

export function getAllPendingWorkshop() {
    return axios.get(WORKSHOP_API_URL + '/pending-workshops');
}

export function downloadDocumentByWorkshop(formData) {
    console.log(formData);
    return  axios.post(WORKSHOP_API_URL + '/download-documents',formData,{responseType:'blob'})
        .then( (response) => {
            let headline =  response.request.getResponseHeader('Content-Disposition');
            let startFileNameIndex = headline.indexOf('=')+1;
            let endFileNameIndex = headline.lastIndexOf('"');
            let filename =  headline.substring(startFileNameIndex,endFileNameIndex);
            FileDownload(response.data,filename+".pdf");
        })
}

export function deleteWorkshop(formData) {
    return  axios.post(WORKSHOP_API_URL + '/delete',formData,{})
        .then(response => {
            if(response.status === 201){
                alert("Successfully deleted workshop");
            }
        }).catch(error => alert(error));
}

export function approveWorkshop(formData) {
    return  axios.post(WORKSHOP_API_URL + '/approve',formData,{})
        .then(response => {
            if(response.status === 201){
                alert("Successfully successfully approved the workshop");
            }
        }).catch(error => alert(error));
}

export function updateWorkshop() {
    return axios.get(WORKSHOP_API_URL + '/update');
}