// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
// import SLIIT from 'url:../../assets/images/Sponsored/sliit.png?as=webp';
// import ieee1 from 'url:../../assets/images/Sponsored/ieee1.jpg?as=webp&width=300&height=250';
// import ieee2 from 'url:../../assets/images/Sponsored/ieee2.png?as=webp';
// import ieee3 from 'url:../../assets/images/Sponsored/ieee3.png?as=webp&width=300&height=250';
import SLIIT from '../../assets/images/Sponsored/sliit.png';
import ieee2 from '../../assets/images/Sponsored/ieee2.png';

export default class Sponsored extends Component {

    constructor(props) {
        super(props);
    }

    imageSize = {
        width: 150
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div>
                        <Image src={ieee2} style={this.imageSize} rounded/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div>
                        <Image src={SLIIT} style={this.imageSize} rounded/>
                    </div>
                </div>
            </div>
        )
    }
}