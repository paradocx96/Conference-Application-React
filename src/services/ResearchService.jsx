import React, {Component} from "react";
import axios from "axios";
import AuthHeader from "./AuthHeader";

const BACKEND_COMMON_URL = "http://localhost:8080/researchpaper/";

class ResearchService extends  Component{
    constructor(props) {
        super(props);

    }

    deleteResearchPaperEntry(id)
    {
        return axios.delete(BACKEND_COMMON_URL+"deletePaper/"+id,{headers: AuthHeader()} );
    }

    uploadResearchPaper(formData)
    {
        return axios.post(BACKEND_COMMON_URL+"upload/", formData);
    }

    updateResearchPaper (formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateFile/",formData, {headers: AuthHeader()} );
    }

    downloadResearchPaper(formData)
    {
       return axios.post(BACKEND_COMMON_URL+"downloadById/",formData,
           {
               responseType:'blob',
               headers: AuthHeader()
           }
       );
    }

    getAllResearchPapers()
    {
        return axios.get(BACKEND_COMMON_URL+"getAllResearchpapers/" , {headers: AuthHeader()});
    }

    getResearchPaperDetailsByUsername(username)
    {
        return axios.get(BACKEND_COMMON_URL+"getResearchPaperDetailsByUsername/"+username , {headers: AuthHeader()});
    }

    changeResearchPaperStatus(formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateStatus/",formData, {headers: AuthHeader()});
    }

    reUploadFile(formData)
    {
        return axios.put(BACKEND_COMMON_URL+"updateFile/",formData, {headers: AuthHeader()});
    }



}

export default new ResearchService();