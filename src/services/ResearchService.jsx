import React, {Component} from "react";
import axios from "axios";

const BACKEND_COMMON_URL = "http://localhost:8080/researchpaper/";

class ResearchService extends  Component{
    constructor(props) {
        super(props);

    }

    deleteResearchPaperEntry(id)
    {
        return axios.delete(BACKEND_COMMON_URL+"deletePaper/"+id);
    }

    uploadResearchPaper(formData)
    {
        return axios.post(BACKEND_COMMON_URL+"upload/",formData);
    }

    updateResearchPaper (formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateFile/",formData);
    }

    downloadResearchPaper(formData)
    {
       return axios.post(BACKEND_COMMON_URL+"downloadById/",formData, {responseType:'blob'});
    }

    getAllResearchPapers()
    {
        return axios.get(BACKEND_COMMON_URL+"getAllResearchpapers/");
    }

    getResearchPaperDetailsByUsername(username)
    {
        return axios.get(BACKEND_COMMON_URL+"getResearchPaperDetailsByUsername/"+username);
    }

    changeResearchPaperStatus(formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateStatus/",formData);
    }

    reUploadFile(formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateFile/",formData);
    }



}

export default new ResearchService();