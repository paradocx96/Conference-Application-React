//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";

class Research extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;

        const currentUser = UserService.getCurrentUser();
        if(currentUser!=null)
        {
            this.state.currentUser = currentUser;

            if(this.state.currentUser.roles == "ROLE_USER_RESEARCHER"){
                console.log("Current user is researcher");
                console.log("Showing update link");
                this.state.permission = "permitted"
            }
        }
        else {
            this.state.currentUser="noUser";
        }


        console.log("Permission : "+this.state.permission);



    }

    initialState={
        currentUser:'',
        permission:'notPermitted'
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1 className={'text-white'}>Research</h1>


                {
                    this.state.permission === "permitted"?
                        <Link to={'/research/updatePaper'}>Update Paper</Link>:
                        <div></div>
                }

               {/* <Link to={'/research/upload'} >Upload Research Paper</Link> <br />
                <Link to={'/research/download'} >Download Research Paper</Link> <br />
                <Link to={'/research/viewAll'} >View All  Research Papers</Link> <br />
                <Link to={'/research/deleteEntries'} >Delete research paper entries</Link> <br />

                <Link to={'/research/viewSinglePaper'}>View Single Paper</Link> <br />*/}
            </div>
        );
    }

}

export default Research;