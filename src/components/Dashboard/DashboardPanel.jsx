import React, {Component} from "react";
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/assets/styles/Dashboard.css';
import {Nav} from "react-bootstrap";

export default class DashboardPanel extends Component {

    render() {
        return (
            <div>
                <section id="dashboard">
                    <h1>DASHBOARD</h1>
                    <div className="dashboard-container">

                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/dashboard">Dashboard</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/keynpote-keynotes">Keynote</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/about">News</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/about">Download</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/about">Workshop</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/about">Research</Link>*/}
                        {/*<Link className="btn btn-outline-light btn-group-lg btn-secondary" role="button" to="/about">User</Link>*/}

                        <Nav variant="tabs" defaultActiveKey="/dashboard">
                            <Nav.Item>
                                <Link to={'/dashboard'} className={'nav-link'} >Dashboard</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/dashboard-keynotes'} className={'nav-link'} >Keynote</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={'/dashboard'} className={'nav-link'} >News</Link>

                            </Nav.Item>
                        </Nav>


                    </div>
                </section>
            </div>
        )
    }
}