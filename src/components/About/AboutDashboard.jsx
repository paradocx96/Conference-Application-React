// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutService from "../../services/AboutService";
import {Link} from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert'

class AboutDashboard extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            AboutList: []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount = async () => {
        await AboutService.getAboutDetails()
            .then(response => response.data)
            .then((data) => {
                this.setState({AboutList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    //TODO: Function for delete About Details
    handleDelete = async (id) => {
        await AboutService.deleteAboutDetailsById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }

    submit = (id) => {
        confirmAlert({
            title: 'Confirm to delete?',
            message: 'Are you sure to delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.handleDelete(id);
                        console.log('Delete Operation Proceed!');
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        console.log('Delete Operation Canceled!');
                    }
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true
        });
    };

    render() {
        return (
            <div>
                <section id="about">
                    <div id="about-add">
                        <h1>About Section</h1>
                        <div>
                            <Link to={'/dashboard-about-add'} className={'btn btn-primary'}>Add About
                                Details</Link> {'\u00A0'}
                            <Link to={'/dashboard-about-update'} className={'btn btn-primary'}>Update About
                                Details</Link>
                        </div>
                    </div>

                    <div id="about-view">
                        <h2>About Details</h2>
                        <Table striped bordered hover variant="dark" size="sm">
                            <thead>
                            <tr>
                                <th>Description</th>
                                <th>Venue</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.AboutList.length === 0 ?
                                    <tr>
                                        <td>{'Loading...'}</td>
                                    </tr>
                                    :
                                    this.state.AboutList.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.description}</td>
                                            <td>{item.venue}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <Button
                                                    onClick={this.submit.bind(this, item.id)}
                                                    className="btn-danger">Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutDashboard;