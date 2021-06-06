//IT19014128
//A.M.W.W.R.L. Wataketiya


import React from "react";
//import axios from "axios";
import {Button, Form, Jumbotron} from "react-bootstrap";
import researchService from "/src/services/ResearchService";
import "../../assets/styles/Registration.css";


class ResearchPaperUpload extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState;

        // this.state ={
        //     username:this.props.registrationUsername
        // };

        this.state ={
            username:this.props.registrationUsername,
            email:this.props.registrationEmail
        };

        console.log("Researcher username from research paper upload" + this.state.username);
        console.log("Researcher email from research paper upload" + this.state.email);

        this.fileChange =this.fileChange.bind(this);
        //this.changeUsername = this.changeUsername.bind(this);
        //this.changeEmail = this.changeEmail.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.submitResearchPaper = this.submitResearchPaper.bind(this);
        this.resetResearch = this.resetResearch.bind(this);
    }

    initialState = {
        username:'',
        email:'',
        title:'',
        file:null,
        paperSet:false,
        titleSet:false
    }

    resetResearch =(event) => {
        event.preventDefault();
        this.setState(() => this.initialState);
    }

    //save the changes to file upload
    fileChange = async (event) => {
        event.preventDefault();

        await this.setState({file:event.target.files[0]});

        if(event.target.files[0]){
            this.setState({paperSet:true}); //file is not empty. Set paperSet to true
        }
        else{
            this.setState({paperSet:false}); //file is empty. Set paperSet to false
        }

        console.log("Fileset : "+this.state.paperSet);
        console.log("Title set : "+this.state.titleSet);

        if(this.state.titleSet == true && this.state.paperSet ==true){
            console.log("Both true in file calling on upload")
            this.props.onUploaded();
        }
        else {
            console.log("One or both is false in file. Calling Missing");
            this.props.onFileMissing(); //call onFileMissing
        }
    }

    //save he changes to username
    //later this will be retrieved from session storage
    /*changeUsername = (event) =>{
        event.preventDefault();

        this.setState({username:event.target.value});
    }*/

    //save the changes to email
    /*changeEmail = (event) => {
        event.preventDefault();

        this.setState({email:event.target.value});
    }*/

    //save the changes to research paper title
    changeTitle = (event) => {
        event.preventDefault();

        this.setState({title:event.target.value});

        if(event.target.value){
            this.setState({titleSet:true}); //title is not empty set titleSet to true
        }
        else {
            this.setState({titleSet:false}); //title is empty set titleSet to false
        }

        console.log("Fileset : "+this.state.paperSet);
        console.log("Title set : "+this.state.titleSet);

        if(this.state.titleSet == true && this.state.paperSet ==true){
            console.log("Both true in title calling on upload")
            this.props.onUploaded();
        }
        else {
            console.log("One or both is false in title. Calling Missing");
            this.props.onFileMissing(); //call onFileMissing
        }
    }

    //handle the upload and detail submission
    submitResearchPaper = async () =>{
        //event.preventDefault();


        console.log("Running submit form");

        console.log("Username from research paper : " + this.state.username);
        console.log("Email from research paper : " + this.state.email);

        //setting the form data
        const formData = new FormData();
        formData.append("file",this.state.file);
        formData.append("username",this.state.username);
        formData.append("email",this.state.email);
        formData.append("title",this.state.title);


        //checking whether the form data is null
        if(formData == null){
            console.log('Form data is null');
        }

        /*const COMMON_URL= "http://localhost:8080/";
        const UPLOAD_PATH = "researchpaper/upload/";

        const UPLOAD_URL_FULL = COMMON_URL+  UPLOAD_PATH;*/

        //await axios.post(UPLOAD_URL_FULL, formData)
        await researchService.uploadResearchPaper(formData)
            .then(response => response.data)
            .then( (data) => {
                if(data != null){
                    console.log("File Uploaded successfully");
                    alert("File Uploaded successfully\n ID: "+data);
                    //this.props.onUploaded();
                }
                else{
                    alert("Error in uploading data");
                }
            }).catch( error =>{
                console.log(error);
            })

    }

    componentDidMount() {
    }

    render() {

        const padding={
            padding:'10px'
        }

        const padding2={
            padding:'20px'
        }

        const paddingLeft={
            paddingLeft:'65px'
        }
        return (
            <div style={padding}>


                <h4 style={paddingLeft} className={'text-black'}>Upload your research paper</h4> <br />

                <Form  onSubmit={this.submitResearchPaper.bind(this)} onReset={this.resetResearch.bind(this)}>

                    {/*<Form.Group>
                        <Form.Label>Enter Username Again</Form.Label>
                        <Form.Control

                            type={'text'}
                            name={'username'}
                            placeholder={'Enter username'}
                            onChange={this.changeUsername.bind(this)}
                            className={'bg-dark text-white'}
                        />
                    </Form.Group>*/}

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control

                            type={'text'}
                            required
                            name={'title'}
                            placeholder={'Enter the Title of the research paper'}
                            onChange={this.changeTitle.bind(this)}
                            /*className={'bg-dark text-white'}*/
                        />
                    </Form.Group>

                    {/*<Form.Group>
                        <Form.Label>Enter Email Again</Form.Label>
                        <Form.Control

                            type={'text'}
                            name={'email'}
                            placeholder={'Enter Email'}
                            onChange={this.changeEmail.bind(this)}
                            className={'bg-dark text-white'}
                        />
                    </Form.Group>*/}

                    <Form.Group>
                        <Form.File
                            className={'position-relative'}
                            required
                            name={'file'}
                            label={'Upload Research Paper (in pdf format)'}
                            onChange={this.fileChange.bind(this)}
                            id={'fileUpload'}

                        />
                    </Form.Group>

                    {/*<Button type={'submit'} className={'btn btn-primary'}>Upload</Button>*/}
                    {/*<Button onClick={this.submitResearchPaper} className={'btn btn-primary'}>Upload</Button>
                    <Button type={'reset'} className={'btn btn-secondary'}>Reset</Button>*/}
                </Form>




            </div>
        );
    }

}

export default ResearchPaperUpload;