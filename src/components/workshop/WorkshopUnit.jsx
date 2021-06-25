import React, {Component} from "react";
import {Button, Card, Row, Col} from "react-bootstrap";
import {approveWorkshop, deleteWorkshop, downloadDocumentByWorkshop} from "../../services/WorkshopService";
import UpdateWorkshop from "./UpdateWorkshop";

export default class WorkshopUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowUpdate: false,
            signRole: props.signRole
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
                                this.state.signRole !== "ADMIN" && this.state.signRole !== "REVIEWER" &&
                                <Button onClick={() => this.handleDownload(this.props.workshop.id)}>Download</Button>
                            }

                            {
                                this.state.signRole === "ADMIN" &&
                                <Row>
                                    <Col xs={12} sm={4} className="py-1 text-center">
                                        <Button className="px-5 py-2"
                                                onClick={() => this.handleDownload(this.props.workshop.id)}>Download</Button>
                                    </Col>
                                    <Col xs={12} sm={4} className="py-1 text-center">
                                        <Button variant="danger" className="px-5 py-2"
                                                onClick={() => this.handleDelete(this.props.workshop.id)}>
                                            Delete</Button>
                                    </Col>
                                    <Col xs={12} sm={4} className="py-1 text-center">
                                        <Button variant="warning" className="px-5 py-2"
                                                onClick={() => this.handleOnClickUpdate()}>
                                            Update</Button>
                                    </Col>
                                </Row>
                            }
                        </Card>
                        :
                        <UpdateWorkshop workshop={this.props.workshop}
                                        handleUpdateCancel={() => this.handleUpdateCancel()}/>
                }
            </React.Fragment>


        )
    }

}
