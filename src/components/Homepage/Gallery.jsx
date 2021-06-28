// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';

// TODO: Import Images
// import Image1 from '../../assets/images/Gallery/Image1.jpg';
// import Image2 from '../../assets/images/Gallery/Image2.jpg';
// import Image3 from '../../assets/images/Gallery/Image3.jpg';
// import Image4 from '../../assets/images/Gallery/Image4.jpg';
// import Image5 from '../../assets/images/Gallery/Image5.jpg';

// TODO: Parcel Image Transform
import Image1 from 'url:../../assets/images/Gallery/Image1.jpg?as=webp&width=300&height=250';
import Image2 from 'url:../../assets/images/Gallery/Image2.jpg?as=webp&width=300&height=250';
import Image3 from 'url:../../assets/images/Gallery/Image3.jpg?as=webp&width=300&height=250';
import Image4 from 'url:../../assets/images/Gallery/Image4.jpg?as=webp&width=300&height=250';
import Image5 from 'url:../../assets/images/Gallery/Image5.jpg?as=webp&width=300&height=250';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    imageSize = {
        width: 300,
        height: 250
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 p-1">
                        <Image src={Image1} rounded/>
                    </div>
                    <div className="col-md-4 p-1">
                        <Image src={Image2} rounded/>
                    </div>
                    <div className="col-md-4 p-1">
                        <Image src={Image3} rounded/>
                    </div>
                    <div className="col-md-4 p-1">
                        <Image src={Image4} rounded/>
                    </div>
                    <div className="col-md-4 p-1">
                        <Image src={Image5} rounded/>
                    </div>
                </div>
            </div>
        )
    }
}