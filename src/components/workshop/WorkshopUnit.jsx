import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import {approveWorkshop, deleteWorkshop, downloadDocumentByWorkshop} from "../../services/WorkshopService";
import UpdateWorkshop from "./UpdateWorkshop";

export default class WorkshopUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowUpdate: false
        }
    }

    async handleDownload(workshopId) {
        const formData = new FormData();
        formData.append("id", workshopId);
        await downloadDocumentByWorkshop(formData);
    }

    async handleDelete(workshopId) {
        const formData = new FormData();
        formData.append("id", workshopId);
        await deleteWorkshop(formData);
    }

    async handleApprove(workshopId) {
        const formData = new FormData();
        formData.append("id", workshopId);
        await approveWorkshop(formData);
    }

    handleOnClickUpdate() {
        this.setState({isShowUpdate: !this.state.isShowUpdate});
    }

    handleUpdateCancel(value) {
        // console.log(this.state.isShowUpdate)
        this.setState({isShowUpdate: value});
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.state.isShowUpdate ?
                        <Card className="mx-2 my-2 px-4 py-3">
                            <span>{this.props.workshop.username}</span><br/>
                            <span>{this.props.workshop.title}</span><br/>
                            {this.props.workshop.courseCode !== '' && <>
                                <span>{this.props.workshop.courseCode}</span><br/></>}
                            <span>{this.props.workshop.venue}</span><br/>
                            <span>{this.props.workshop.date}</span><br/>
                            <span>{this.props.workshop.startingTime}</span><br/>
                            {this.props.workshop.endTime !== '' && <><span>{this.props.workshop.endTime}</span><br/></>}
                            {this.props.workshop.description !== '' && <>
                                <span>{this.props.workshop.description}</span><br/></>}

                            {
                                // this.props.workshop.hasDocuments &&
                                <Button onClick={() => this.handleDownload(this.props.workshop.id)}>Download</Button>
                            }
                            {
                                // this.props.workshop.hasDocuments &&
                                <Button variant="danger" onClick={() => this.handleDelete(this.props.workshop.id)}>
                                    Delete</Button>
                            }
                            {
                                // this.props.workshop.hasDocuments &&
                                <Button variant="warning"
                                        onClick={() => this.handleOnClickUpdate()}>
                                    Update</Button>
                            }
                            {
                                // this.props.workshop.hasDocuments &&
                                <Button variant="success"
                                        onClick={() => this.handleApprove(this.props.workshop.id)}>
                                    Approve</Button>
                            }

                        </Card>
                        :
                        <UpdateWorkshop workshop={this.props.workshop} handleUpdateCancel={() => this.handleUpdateCancel()}/>
                }
            </React.Fragment>


        )
    }

}