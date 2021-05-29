import React, {Component} from "react";
import {Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {
    approveWorkshop,
    deleteWorkshop,
    downloadDocumentByWorkshop,
    updateWorkshop
} from "../../services/WorkshopService";
import {IoMdCloseCircleOutline} from "react-icons/io";
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

    // async handleUpdate() {
    //     const formData = new FormData();
    //     formData.append("id", this.props.workshop.id);
    //     formData.append("username", this.state.username);
    //     formData.append("title", this.state.workshop.title);
    //     formData.append("courseCode", this.state.workshop.courseCode);
    //     formData.append("venue", this.state.workshop.venue);
    //     formData.append("date", this.state.workshop.date);
    //     formData.append("startingTime", this.state.workshop.startingTime);
    //     formData.append("endTime", this.state.workshop.endTime);
    //     formData.append("description", this.state.workshop.description);
    //     formData.append("documents", this.state.workshop.documents);
    //     await updateWorkshop(formData);
    // }

    async handleOnClickUpdate() {
        this.setState({isShowUpdate: !this.state.isShowUpdate});
    }

    handleUpdateCancel() {
        console.log(this.state.isShowUpdate)
        this.setState({isShowUpdate: false});
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
                                        onClick={() => this.handleOnClickApprove(this.props.workshop.id)}>
                                    Approve</Button>
                            }

                        </Card>
                        :
                        <UpdateWorkshop workshop={this.props.workshop} handleUpdateCancle={() =>this.handleUpdateCancel()}/>
                }
            </React.Fragment>


        )
    }

}