import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";

import DownloadService from "../../services/DownloadService";

export default class DownloadDashboardListEditor extends Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = {
            downloadItemList: [],
            isLoading: true,
            errors: null,
            show: false
        };
    }

    //TODO: Function for get all Download items from database
    componentDidMount = async () => {
        await DownloadService.getDownloadItems()
            .then(response =>
                response.data.map(
                    item => ({
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        status: item.status,
                        user: item.user,
                        datetime: item.datetime
                    }))
            )
            .then(downloadItemList => {
                this.setState({
                    downloadItemList,
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

    render() {
        const {isLoading, downloadItemList} = this.state;
        return (
            <div>
                <h1>Download Items List</h1>
                <div>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!isLoading ? (
                            downloadItemList.map(item => {
                                const {id, name, type, status, user, datetime} = item;
                                return (
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{datetime}</td>
                                        <td>{status}</td>
                                        <td>{user}</td>
                                        <td>
                                            <Button className="btn-success">Edit</Button>
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