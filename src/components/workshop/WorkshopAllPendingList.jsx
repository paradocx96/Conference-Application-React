import React, {Component} from "react";
import {Button, Card, Col, Row, Spinner} from "react-bootstrap";
import {approveWorkshop, downloadDocumentByWorkshop, getAllPendingWorkshop} from "../../services/WorkshopService";
import CommonCheckAuth from "../../services/CommonCheckAuth";

class WorkshopAllPendingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workshopList: [],
            isLoading: true
        }
    };

    async handleDownload(workshopId) {
        const formData = new FormData();
        formData.append("id", workshopId);
        await downloadDocumentByWorkshop(formData);
    }

    async handleApprove(workshopId) {
        const formData = new FormData();
        formData.append("id", workshopId);
        await approveWorkshop(formData);
        await this.componentDidMount();
        alert("The workshop has been approved successfully");
    }

    renderWorkshopList = () => {
        if (this.state.isLoading && this.state.workshopList.length === 0) {
            return <div style={{minHeight: '25vh', color: 'gray'}} className="text-center pt-5">
                <Spinner animation="border"/><span className="h3"> Loading</span>
            </div>
        } else if (this.state.workshopList.length === 0) {
            return <span className="text-danger">There is no any pending workshops for approbation </span>
        } else {
            return this.state.workshopList.map((workshop, index) =>
                <Card className="mx-2 my-2 px-4 py-3">
                    <span>{workshop.username}</span><br/>
                    <span>{workshop.title}</span><br/>
                    {workshop.courseCode !== '' && <>
                        <span>{workshop.courseCode}</span><br/></>}
                    <span>{workshop.venue}</span><br/>
                    <span>{workshop.date}</span><br/>
                    <span>{workshop.startingTime}</span><br/>
                    {workshop.endTime !== '' && <><span>{workshop.endTime}</span><br/></>}
                    {workshop.description !== '' && <>
                        <span>{workshop.description}</span><br/></>}
                    <Row>
                        <Col xs={6}>
                            <Button className="px-3 px-sm-5 py-2"
                                    onClick={() => this.handleDownload(workshop.id)}>Download</Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant="success" className="px-3 px-sm-5 py-2"
                                    onClick={() => this.handleApprove(workshop.id)}>Approve</Button>
                        </Col>
                    </Row>
                </Card>);
        }

    }

    componentDidMount() {
        getAllPendingWorkshop().then(value => this.setState({workshopList: value.data, isLoading: false}));
    }

    render() {
        return (
            <Card className="mx-2 my-3 p-2 pt-4">
                <h2 className="px-2">Pending Workshops</h2>
                {
                    this.renderWorkshopList()
                }
            </Card>
        )
    }
}

export default CommonCheckAuth(WorkshopAllPendingList);
