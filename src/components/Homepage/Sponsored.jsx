// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import SLIIT from 'url:../../assets/images/Sponsored/sliit.png?as=webp&width=300&height=250';
import ieee1 from 'url:../../assets/images/Sponsored/ieee1.jpg?as=webp&width=300&height=250';
import ieee2 from 'url:../../assets/images/Sponsored/ieee2.png?as=webp&width=300&height=250';
import ieee3 from 'url:../../assets/images/Sponsored/ieee3.png?as=webp&width=300&height=250';

export default class Sponsored extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 border">
                        <Image src={ieee1} rounded/>
                    </div>
                    <div className="col-md-4 border">
                        <Image src={ieee2} rounded/>
                    </div>
                    <div className="col-md-4 border">
                        <Image src={ieee3} rounded/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="border">
                        <Image src={SLIIT} rounded/>
                    </div>
                </div>
            </div>
        )
    }
}