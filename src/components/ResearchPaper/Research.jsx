//IT19014128
//A.M.W.W.R.L. Wataketiya

import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Research extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Research</h1>  <br />
                <Link to={'/research/upload'} >Upload Research Paper</Link> <br />
                <Link to={'/research/download'} >Download Research Paper</Link> <br />
                <Link to={'/research/viewAll'} >View All  Research Papers</Link> <br />
            </div>
        );
    }

}

export default Research;