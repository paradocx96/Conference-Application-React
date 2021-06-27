import React from "react";
//import axios from "axios";
import {Button, Card, Form} from "react-bootstrap";
//import researchService from "/src/services/ResearchService";
import researchService from "../../services/ResearchService";
import CommonCheckAuth from "../../services/CommonCheckAuth";
import UserService from "../../services/UserService";
import {Link, Redirect} from "react-router-dom";

class UpdateResearchPaper extends React.Component{
    constructor(props) {
        super(props);

        this.state= this.initialState;

        //get the current user
        const currentUser = UserService.getCurrentUser();

        this.state.currentUser = currentUser;
        this.state.currentUsername = this.state.currentUser.username;

        console.log("Current user: "+  this.state.currentUsername);
        console.log("Current user role "+ this.state.currentUser.roles);

        if (this.state.currentUser.roles == "ROLE_ADMIN"){
            console.log("Current user is admin. Permitting");
            console.log("This section is not retrieving data for the admin properly");
            this.state.permission = "permitted";
        }
        else if(this.state.currentUser.roles == "ROLE_USER_RESEARCHER"){
            console.log("Current user is researcher. Permitting");
            this.state.permission = "permitted";
        }

        this.handleUpload = this.handleUpload.bind(this);
        this.fileChange = this.fileChange.bind(this);

    }

    initialState={
        id:'',
        username:'',
        title:'',
        status:'',
        file:null,
        currentUser:'',
        currentUsername:'',
        permission:'notPermitted'
    }

    componentDidMount = async () => {

        //set username from session storage
        await this.setState({username:'lashan@gmail.com'});

        /*const COMMON_URL= "http://localhost:8080/";
        const VIEW_PAPER = "researchpaper/getResearchPaperDetailsByUsername/";

        const VIEW_PAPER_FULL_PATH = COMMON_URL+VIEW_PAPER;*/

        //const formData  = new FormData();
        //formData.append("username",this.state.username);

        //await axios.get(VIEW_PAPER_FULL_PATH+this.state.username)

        //this draws and connects to the research paper of the current user
        await researchService.getResearchPaperDetailsByUsername(this.state.currentUsername)
            .then(response => response.data)
            .then( (data) => {
                this.setState({id:data.id});
                this.setState({title:data.title});
                this.setState({status:data.status});
            }).catch(error => {
                console.log(error);
            })
    }

    fileChange = async (event) => {
        event.preventDefault();

        await this.setState({file:event.target.files[0]});
    }

    handleUpload = async (event) => {
        event.preventDefault();

        /*const COMMON_URL= "http://localhost:8080/";
        const UPLOAD_PATH = "researchpaper/updateFile/";

        const UPLOAD_URL_FULL = COMMON_URL+  UPLOAD_PATH;*/

        const formData = new FormData();
        formData.append("id",this.state.id);
        formData.append("file",this.state.file);

        //await axios.put(UPLOAD_URL_FULL,formData)
        await researchService.reUploadFile(formData)
            .then(response => response.data)
            .then( (data) => {
                if ((data != null)){
                    alert("File re-uploaded successfully\n ID: "+data.id);
                }
                else {
                    alert("Error in uploading file");
                }
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        const padding={
            padding:'10px'
        }
        const padding2={
            padding:'50px'
        }

        const padding3={
            padding:'20px'
        }
        return (

            <>

                <style type={'text/css'}>
                    {
                        `
                        .color-back{
                            background-color: #fff2c2;
                        }
                        `
                    }
                </style>

                <div className={' pb-md-5 color-back'}>



            <div className={'container'} >


                {
                    this.state.permission ==='notPermitted'?
                        <Redirect to={'/no-permission'} />:
                        <div></div>
                }
                <div className={'pt-md-5'}>
                    <h2 >View and Update File</h2>
                </div>

                <div className={'pt-md-5'}>

                <Card className={'bg-transparent text-white'}>
                    <Card.Header className={'bg-primary'}>
                        <Card.Title>
                            Upload id: {this.state.id}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body className={'bg-dark'}>
                        <Card.Text>Title : {this.state.title}</Card.Text>
                        <Card.Text>Status : {this.state.status}</Card.Text>
                        {
                            this.state.status === 'approved'?
                                <Link to={'/research/payment'} className={'btn btn-success'}>Pay</Link> :
                                <div></div>
                        }
                    </Card.Body>
                </Card>

                </div>

                <p >Re Upload your file only if it is rejected.</p>
                <p >Once re-uploaded it will be revoked to pending</p>

                <Form style={padding3} className={'bg-dark text-white'} onSubmit={this.handleUpload.bind(this)}>
                    <Form.Group>
                        <Form.File

                            className={'position-relative'}
                            required
                            name={'file'}
                            label={'Upload research paper again (in pdf format)'}
                            onChange={this.fileChange.bind(this)}
                            id={'fileUpload'}

                        />
                    </Form.Group>

                    <Button type={'submit'} className={'btn btn-primary'}>Re-Upload</Button>
                </Form>
            </div>

                </div>


            </>
        );
    }

}

export default CommonCheckAuth (UpdateResearchPaper);