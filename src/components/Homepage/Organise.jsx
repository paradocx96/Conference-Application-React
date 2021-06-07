// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import Image1 from 'url:../../assets/images/Gallery/Image1.jpg?as=webp&width=300&height=250';

export default class Organise extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 border">
                        <Image src={Image1} rounded/>
                    </div>
                </div>
            </div>
        )
    }
}