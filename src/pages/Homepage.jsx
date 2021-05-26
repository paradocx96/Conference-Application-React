import React, {Component} from "react";
import ViewKeyNoteHomepage from "../components/KeyNotes/ViewKeyNoteHomepage";
import '/src/assets/styles/Homepage.css';
import {Form, Button, Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBar from "../components/Foobar/FooterBar";

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <section id="introduction">
                    <div className="introduction-container">
                        <h1>RHNA_C0NF3R3NC3 - 2021</h1>
                        <h3>Sri Lanka Institute of Information Technology</h3>
                        <a href="#news" className="about-news scrollto">Latest News</a>
                    </div>
                </section>
                <section id="keynotes">
                    <div className="keynote-container">
                        <h2>KEY NOTE SPEAKERS</h2>
                        <br/>
                        <div>
                            <ViewKeyNoteHomepage/>
                        </div>
                    </div>
                </section>
                <section id="news">
                    <div className="news-container">
                        <h2>LATEST NEWS</h2>
                        <br/>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}