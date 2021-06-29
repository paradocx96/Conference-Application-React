// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import {Card, Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Import Images
import AjaxImage from './../../assets/images/ConferenceTrack/AJAX-Language-01.jpg';
import AngularImage from './../../assets/images/ConferenceTrack/Angular-JS-01.jpg';
import BabelImage from './../../assets/images/ConferenceTrack/Babel-01.jpg';
import CImage from './../../assets/images/ConferenceTrack/C-01.jpg';
import CSharpImage from './../../assets/images/ConferenceTrack/C-Sharp-01.jpg';
import CSSImage from './../../assets/images/ConferenceTrack/CSS-3-01.jpg';
import ES6Image from './../../assets/images/ConferenceTrack/ES6-01.jpg';
import FirebaseImage from './../../assets/images/ConferenceTrack/Firebase-02.jpg';
import GopherImage from './../../assets/images/ConferenceTrack/Gopher-01.jpg';
import GraphQLImage from './../../assets/images/ConferenceTrack/GraphQL-01.jpg';
import HTMLImage from './../../assets/images/ConferenceTrack/HTML-5-01.jpg';
import JavaImage from './../../assets/images/ConferenceTrack/Java-01.jpg';
import JavaScriptImage from './../../assets/images/ConferenceTrack/JavaScript-01.jpg';
import JoomlaImage from './../../assets/images/ConferenceTrack/Joomla-01.jpg';
import JQueryImage from './../../assets/images/ConferenceTrack/JQuery-01.jpg';
import LaravelImage from './../../assets/images/ConferenceTrack/Laravel-04.jpg';
import MaterializeImage from './../../assets/images/ConferenceTrack/Materialize-CSS-01.jpg';
import MicrosoftDotNetImage from './../../assets/images/ConferenceTrack/Microsoft-Dotnet-01.jpg';
import MySQLImage from './../../assets/images/ConferenceTrack/MySQL-01.jpg';
import NextJsImage from './../../assets/images/ConferenceTrack/Nextjs-01.jpg';
import NodeJsImage from './../../assets/images/ConferenceTrack/Node-JS-01.jpg';
import NpmImage from './../../assets/images/ConferenceTrack/Npm-01.jpg';
import PHPImage from './../../assets/images/ConferenceTrack/PHP-01.jpg';
import PythonImage from './../../assets/images/ConferenceTrack/Python-01.jpg';
import ReactImage from './../../assets/images/ConferenceTrack/React-01.jpg';
import RubyImage from './../../assets/images/ConferenceTrack/Ruby-01.jpg';
import SassImage from './../../assets/images/ConferenceTrack/Sass-01.jpg';
import TypescriptImage from './../../assets/images/ConferenceTrack/Typescript-02.jpg';
import VueJsImage from './../../assets/images/ConferenceTrack/Vue-JS-01.jpg';

// TODO: Parcel Image Transform
// import AjaxImage from 'url:./../../assets/images/ConferenceTrack/AJAX-Language-01.jpg';
// import AngularImage from 'url:./../../assets/images/ConferenceTrack/Angular-JS-01.jpg';
// import BabelImage from 'url:./../../assets/images/ConferenceTrack/Babel-01.jpg';
// import CImage from 'url:./../../assets/images/ConferenceTrack/C-01.jpg';
// import CSharpImage from 'url:./../../assets/images/ConferenceTrack/C-Sharp-01.jpg';
// import CSSImage from 'url:./../../assets/images/ConferenceTrack/CSS-3-01.jpg';
// import ES6Image from 'url:./../../assets/images/ConferenceTrack/ES6-01.jpg';
// import FirebaseImage from 'url:./../../assets/images/ConferenceTrack/Firebase-02.jpg';
// import GopherImage from 'url:./../../assets/images/ConferenceTrack/Gopher-01.jpg';
// import GraphQLImage from 'url:./../../assets/images/ConferenceTrack/GraphQL-01.jpg';
// import HTMLImage from 'url:./../../assets/images/ConferenceTrack/HTML-5-01.jpg';
// import JavaImage from 'url:./../../assets/images/ConferenceTrack/Java-01.jpg';
// import JavaScriptImage from 'url:./../../assets/images/ConferenceTrack/JavaScript-01.jpg';
// import JoomlaImage from 'url:./../../assets/images/ConferenceTrack/Joomla-01.jpg';
// import JQueryImage from 'url:./../../assets/images/ConferenceTrack/JQuery-01.jpg';
// import LaravelImage from 'url:./../../assets/images/ConferenceTrack/Laravel-04.jpg';
// import MaterializeImage from 'url:./../../assets/images/ConferenceTrack/Materialize-CSS-01.jpg';
// import MicrosoftDotNetImage from 'url:./../../assets/images/ConferenceTrack/Microsoft-Dotnet-01.jpg';
// import MySQLImage from 'url:./../../assets/images/ConferenceTrack/MySQL-01.jpg';
// import NextJsImage from 'url:./../../assets/images/ConferenceTrack/Nextjs-01.jpg';
// import NodeJsImage from 'url:./../../assets/images/ConferenceTrack/Node-JS-01.jpg';
// import NpmImage from 'url:./../../assets/images/ConferenceTrack/Npm-01.jpg';
// import PHPImage from 'url:./../../assets/images/ConferenceTrack/PHP-01.jpg';
// import PythonImage from 'url:./../../assets/images/ConferenceTrack/Python-01.jpg';
// import ReactImage from 'url:./../../assets/images/ConferenceTrack/React-01.jpg';
// import RubyImage from 'url:./../../assets/images/ConferenceTrack/Ruby-01.jpg';
// import SassImage from 'url:./../../assets/images/ConferenceTrack/Sass-01.jpg';
// import TypescriptImage from 'url:./../../assets/images/ConferenceTrack/Typescript-02.jpg';
// import VueJsImage from 'url:./../../assets/images/ConferenceTrack/Vue-JS-01.jpg';


export default class ConferenceTracks extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={JavaImage}/>
                                    <Card.Text>Java</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={ReactImage}/>
                                    <Card.Text>React Js</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={JavaScriptImage}/>
                                    <Card.Text>JavaScript</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={HTMLImage}/>
                                    <Card.Text>HTML</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={PythonImage}/>
                                    <Card.Text>Python</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={NodeJsImage}/>
                                    <Card.Text>Node Js</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={TypescriptImage}/>
                                    <Card.Text>TypeScript</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={ES6Image}/>
                                    <Card.Text>ES6</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={VueJsImage}/>
                                    <Card.Text>Vue Js</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={PHPImage}/>
                                    <Card.Text>PHP</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={CImage}/>
                                    <Card.Text>C</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={CSharpImage}/>
                                    <Card.Text>C#</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={MicrosoftDotNetImage}/>
                                    <Card.Text>Microsoft .Net</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={RubyImage}/>
                                    <Card.Text>Ruby</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={NpmImage}/>
                                    <Card.Text>NPM</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={NextJsImage}/>
                                    <Card.Text>Next Js</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={AngularImage}/>
                                    <Card.Text>Angular Js</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={GopherImage}/>
                                    <Card.Text>Go Language</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={LaravelImage}/>
                                    <Card.Text>Laravel</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={AjaxImage}/>
                                    <Card.Text>Ajax</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={CSSImage}/>
                                    <Card.Text>CSS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={SassImage}/>
                                    <Card.Text>SASS</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={MaterializeImage}/>
                                    <Card.Text>Materialize</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={JQueryImage}/>
                                    <Card.Text>JQuery</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={JoomlaImage}/>
                                    <Card.Text>Joomla</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={BabelImage}/>
                                    <Card.Text>Babel</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={MySQLImage}/>
                                    <Card.Text>MySQL</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={FirebaseImage}/>
                                    <Card.Text>Firebase</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={GraphQLImage}/>
                                    <Card.Text>GraphQL</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}