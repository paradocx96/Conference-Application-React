import axios from "axios";
import FileDownload from "js-file-download";

const WORKSHOP_API_URL = 'http://localhost:8080/workshop';


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


export function downloadDocumentByUserName(formData) {
    return  axios.post(WORKSHOP_API_URL + '/downloadByUsername',formData,{responseType:'blob'})
        .then( (response) => {
            let headline =  response.request.getResponseHeader('Content-Disposition');
            let startFileNameIndex = headline.indexOf('=')+1;
            let endFileNameIndex = headline.lastIndexOf('"');
            let filename =  headline.substring(startFileNameIndex,endFileNameIndex);
            FileDownload(response.data,filename+".pdf");
        })
}