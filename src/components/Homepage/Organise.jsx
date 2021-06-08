// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import SLIIT from 'url:../../assets/images/Sponsored/sliit.png?as=webp';

export default class Organise extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Image src={SLIIT} rounded/>
            </div>
        )
    }
}