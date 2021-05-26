import axios from "axios";

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