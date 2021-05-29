//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";
import FileDownload from "js-file-download";

class ViewAllResearchPapers extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState;

        this.handleDownload = this.handleDownload.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.handleRevoke = this.handleRevoke.bind(this);

    }

    initialState={
        researchPapers:[]
    }

    componentDidMount = async () => {
        const COMMON_URL= "http://localhost:8080/";
        const VIEW_PAPERS = "researchpaper/getAllResearchpapers/";

        const   FULL_URL_GET_PAPERS = COMMON_URL+ VIEW_PAPERS ;

        //get all the researchPapers and set them in the state variable
        await axios.get(FULL_URL_GET_PAPERS)
            .then(response => response.data)
            .then( (data) => {
                this.setState({researchPapers:data});
            })

    }

    //download the file for a selected id
    handleDownload = async (id) => {
        const COMMON_URL= "http://localhost:8080/";
        const DOWNLOAD_PATH = "researchpaper/downloadById/";
        const DOWNLOAD_URL_FUL = COMMON_URL+DOWNLOAD_PATH;

        const formData = new FormData();
        formData.append("id",id)

        await axios.post(DOWNLOAD_URL_FUL,formData,{responseType:'blob'})
            .then( (response) => {
                console.log("Data : " +response.data);

                let headerline =  response.request.getResponseHeader('Content-Disposition') //get content disposition
                let startFileNameIndex = headerline.indexOf('=')+1;  //set start at '=' sign of 'filename=' phrase
                let endFileNameIndex = headerline.lastIndexOf('"');  //set the last index at the end of the content disposition
                let filename =  headerline.substring(startFileNameIndex,endFileNameIndex);  //get the substring filename
                console.log("Content disposition: "+ headerline);

                FileDownload(response.data,filename+".pdf");
            })

    }

    //performs approving
    handleApprove = async (id) => {
        //id.preventDefault();

        const COMMON_URL= "http://localhost:8080/";
        const UPDATE_PATH = "researchpaper/updateStatus/";
        const DOWNLOAD_URL_FUL = COMMON_URL+UPDATE_PATH;

        const formData = new FormData();
        formData.append("id",id);
        formData.append("status","approved");

        await axios.put(DOWNLOAD_URL_FUL,formData)
            .then(response => response.data)
            .then( (data) => {
                alert("Approved research paper : " +data.id);
            }).catch( error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //performs rejecting
    handleReject = async (id) => {
        //id.preventDefault();

        const COMMON_URL= "http://localhost:8080/";
        const UPDATE_PATH = "researchpaper/updateStatus/";
        const DOWNLOAD_URL_FUL = COMMON_URL+UPDATE_PATH;

        const formData = new FormData();
        formData.append("id",id);
        formData.append("status","rejected");

        await axios.put(DOWNLOAD_URL_FUL,formData)
            .then(response => response.data)
            .then( (data) => {
                alert("Rejected research paper : "+ data.id);
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //performs revoking
    handleRevoke = async (id) => {
        //id.preventDefault();

        const COMMON_URL= "http://localhost:8080/";
        const UPDATE_PATH = "researchpaper/updateStatus/";
        const DOWNLOAD_URL_FUL = COMMON_URL+UPDATE_PATH;

        const formData = new FormData();
        formData.append("id",id);
        formData.append("status","pending");

        await axios.put(DOWNLOAD_URL_FUL,formData)
            .then(response => response.data)
            .then( (data) => {
                alert("Revoked research paper : "+ data.id);
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant={'light'}>

                    <thead>
                    <tr>
                        <th>Upload Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Research paper Title</th>
                        <th>Research paper Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.researchPapers.length === 0?
                            <tr align={'center'}>
                                <td>{this.state.researchPapers.length} research papers available</td>
                            </tr> :
                            this.state.researchPapers.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.title}</td>
                                    <td>{e.status}</td>

                                    <td>
                                        <Button className={'btn btn-primary'}
                                                onClick={this.handleDownload.bind(this,e.id)}
                                            >
                                        Download
                                        </Button>
                                    </td>
                                    <td><Button className={'btn btn-success'}
                                                onClick={this.handleApprove.bind(this,e.id)}>
                                        Approve
                                    </Button> </td>

                                    <td><Button className={'btn btn-danger'}
                                    onClick={this.handleReject.bind(this,e.id)}>
                                        Reject
                                    </Button> </td>

                                    <td><Button className={'btn btn-secondary'}
                                    onClick={this.handleRevoke.bind(this,e.id)}>
                                        Revoke to pending
                                    </Button> </td>
                                </tr>
                            ))
                    }

                    </tbody>

                </Table>

            </div>
        );
    }

}

export default ViewAllResearchPapers;