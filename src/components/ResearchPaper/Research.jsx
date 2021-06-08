//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import {Card, Carousel} from "react-bootstrap";
import laptopPhoto from "url:../../assets/images/laptop-photo.jpg";
import collaborationPhoto from "url:../../assets/images/collaboration-photo.jpg";
import bigDataPhoto from "url:../../assets/images/big-data-photo.jpg";
import codePhoto from "url:../../assets/images/code-photo.jpg";

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
        const padding={
            padding:'10px'
        }
        return (
            <div>
                {/*<h1 className={'text-white'}>Research</h1>*/}

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={laptopPhoto}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                           <h1>Meaningful Innovation</h1>
                            <a href={'https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2557615'}
                               target={'_blank'}>
                                Image credits
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={codePhoto}
                            alt="Second slide"

                        />
                        <Carousel.Caption>
                            <h1>Ideas at work</h1>
                            <a href={'https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=731198'}
                            target={'_blank'}>
                                Image Credits
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bigDataPhoto}
                            alt="Second slide"

                        />
                        <Carousel.Caption>
                            <h1 className={'text-dark'}>New Topics</h1>
                            <a href={'https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=895567'}
                               target={'_blank'}>
                                Image Credits
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

                <br/>


                {
                    this.state.permission === "permitted"?
                        <div style={padding}>
                            <Card className={'bg-dark'}>
                                <Card.Header className={'bg-primary text-white'}>
                                    You are registered as a researcher
                                </Card.Header>
                                <Card.Body className={'bg-dark text-white'}>
                                    <Card.Title>You can view details below</Card.Title>

                                    <Link className={'btn btn-primary btn-block'} to={'/research/updatePaper'}>
                                        View and update your research paper
                                    </Link>

                                </Card.Body>
                            </Card>

                        </div>:

                        <div style={padding}>
                            <Card className={'bg-dark'}>
                                <Card.Header className={'bg-primary text-white'}>Attention Researchers!</Card.Header>
                                <Card.Body className={'bg-dark text-white'}>
                                    <Card.Title>Registration are Open</Card.Title>
                                    <Card.Text>
                                        You can upload your research papers upon registration.
                                    </Card.Text>
                                    <Link to={'/sign-up'} className={'btn btn-primary'}>Sign Up</Link>
                                </Card.Body>
                                <Card.Footer className={'bg-dark text-white'}>
                                    <Card.Text>
                                        Already Registered?
                                    </Card.Text>
                                    <Link to={'/sign-in'} className={'btn btn-success'}>Login</Link>
                                </Card.Footer>
                            </Card>
                        </div>
                }

               {/* <Link to={'/research/upload'} >Upload Research Paper</Link> <br />
                <Link to={'/research/download'} >Download Research Paper</Link> <br />
                <Link to={'/research/viewAll'} >View All  Research Papers</Link> <br />
                <Link to={'/research/deleteEntries'} >Delete research paper entries</Link> <br />

                <Link to={'/research/viewSinglePaper'}>View Single Paper</Link> <br />*/}

                <br />
                <br />
                <br />
            </div>
        );
    }

}

export default Research;