// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import {confirmAlert} from 'react-confirm-alert';
import NewsService from "../../services/NewsService";

export default class NewsDashboardList extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            isLoading: true,
            errors: null,
            show: false
        };

        this.handleNewsActivate = this.handleNewsActivate.bind(this);
        this.handleNewsDeactivate = this.handleNewsDeactivate.bind(this);
        this.handleNewsDeleteProcess = this.handleNewsDeleteProcess.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
    }

    //TODO: Function for get all News data from database
    componentDidMount = async () => {
        await NewsService.getNews()
            .then(response =>
                response.data.map(
                    news => ({
                        id: news.id,
                        description: news.description,
                        date: news.date,
                        datetime: news.datetime,
                        status: news.status,
                        user: news.user
                    }))
            )
            .then(newsList => {
                this.setState({
                    newsList,
                    isLoading: false
                });
            })
            .catch(error =>
                this.setState({
                    error,
                    isLoading: true
                })
            );
    }

    //TODO: Function for activate a News
    handleNewsActivate = async (id) => {
        let value = {
            status: 'Active'
        }

        await NewsService.updateNewsStatusById(id,value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //TODO: Function for deactivate a News
    handleNewsDeactivate = async (id) => {
        let value = {
            status: 'Deactive'
        }

        await NewsService.updateNewsStatusById(id,value)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            })

        await this.componentDidMount();
    }

    //TODO: Function for confirm delete operation
    submitDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete?',
            message: 'Are you sure to delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.handleNewsDeleteProcess(id);
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

    //TODO: Function for delete a News
    handleNewsDeleteProcess = async (id) => {
        await NewsService.deleteNewsById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });

        await this.componentDidMount();
    }


    render() {
        const {isLoading, newsList} = this.state;
        return (
            <div>
                <h2>News List</h2>
                <div>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Creation Date & Time</th>
                            <th>Status</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            newsList.map(news => {
                                const {id, description, date, datetime, status, user} = news;
                                return (
                                    <tr key={id}>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{datetime}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>
                                            <Button
                                                onClick={this.handleNewsActivate.bind(this, news.id)}
                                                className="btn-secondary">Activate</Button>
                                            <Button
                                                onClick={this.handleNewsDeactivate.bind(this, news.id)}
                                                className="btn-warning">Deactivate</Button>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={this.submitDelete.bind(this, news.id)}
                                                className="btn-danger">Delete</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                                <td>Loading...</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}