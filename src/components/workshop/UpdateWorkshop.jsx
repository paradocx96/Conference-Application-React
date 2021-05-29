import React, {Component} from "react";
import {Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {IoMdCloseCircleOutline} from "react-icons/io";
import {updateWorkshop} from "../../services/WorkshopService";

/**
 * render create workshop component.
 */
export default class UpdateWorkshop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValidated: false,
            isUploading: false,
            username: props.workshop.username,
            title: props.workshop.title,
            courseCode: props.workshop.courseCode,
            venue: props.workshop.venue,
            date: props.workshop.date,
            startingTime: props.workshop.startingTime,
            endTime: props.workshop.endTime,
            description: props.workshop.description,
            documents: null
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.workshop);
        this.setState({isValidated: true});
        if (
            this.state.workshop.title === '' ||
            this.state.workshop.venue === '' ||
            this.state.workshop.date === '' ||
            this.state.workshop.description === ''
        ) {
            return;
        }

        let formData = new FormData();
        formData.append("id", this.props.workshop.id);
        formData.append("username", this.state.username);
        formData.append("title", this.state.workshop.title);
        formData.append("courseCode", this.state.workshop.courseCode);
        formData.append("venue", this.state.workshop.venue);
        formData.append("date", this.state.workshop.date);
        formData.append("startingTime", this.state.workshop.startingTime);
        formData.append("endTime", this.state.workshop.endTime);
        formData.append("description", this.state.workshop.description);
        formData.append("documents", this.state.workshop.documents);

        this.setState({isUploading: true});
        updateWorkshop(formData).then(() => this.setState({isUploading: false, isValidated: false}));
    }

    handleCancel = () => {
        this.props.handleUpdateCancel(false);
    }

    render() {
        return (
            <React.Fragment>
                <Card className="mx-2 my-5 p-4">
                    <h3>Update workshop
                        <IoMdCloseCircleOutline style={{cursor: 'pointer'}} className="float-right"
                                                onClick={this.handleCancel}/>
                    </h3>
                    <Form noValidate validated={this.state.isValidated} onSubmit={this.handleSubmit}>

                        <Form.Group controlId="validationTitle">
                            <Form.Label>WorkshopUnit title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="WorkshopUnit title"
                                title="Add the workshop title here"
                                // value={this.state.workshop.title ? this.state.title : ""}
                                onChange={event => this.setState({
                                    workshop: {
                                        ...this.state.workshop,
                                        title: event.target.value
                                    }
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCourseCode">
                            <Form.Label>Course code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Course code"
                                title="Add the course code if has. Not necessary"
                                onChange={event => this.setState({
                                    workshop: {
                                        ...this.state.workshop,
                                        courseCode: event.target.value
                                    }
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationVenue">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Venue"
                                title="Add the workshop will conducting place."
                                onChange={event => this.setState({
                                    workshop: {
                                        ...this.state.workshop,
                                        venue: event.target.value
                                    }
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Row>

                            <Form.Group as={Col} xs={12} md={6} controlId="validationDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date"
                                    title="Add the workshop conducting date"
                                    onChange={event => this.setState({
                                        workshop: {
                                            ...this.state.workshop,
                                            date: event.target.value
                                        }
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} xs={12} sm={6} md={3} controlId="validationStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    type="time"
                                    placeholder="start at"
                                    title="Add the workshop starting time"
                                    onChange={event => this.setState({
                                        workshop: {
                                            ...this.state.workshop,
                                            startingTime: event.target.value
                                        }
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} xs={12} sm={6} md={3} controlId="validationEnd">
                                <Form.Label>End</Form.Label>
                                <Form.Control
                                    type="time"
                                    placeholder="end at"
                                    title="Add the workshop approximate ending time. Not required."
                                    onChange={event => this.setState({
                                        workshop: {
                                            ...this.state.workshop,
                                            endTime: event.target.value
                                        }
                                    })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Group controlId="validationDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Description"
                                title="Add brief description about the workshop"
                                onChange={event => this.setState({
                                    workshop: {
                                        ...this.state.workshop,
                                        description: event.target.value
                                    }
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationDocuments">
                            <Form.Label>Documents and materials</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Documents and materials"
                                title="pre-giving workshop materials and documents"
                                onChange={event => this.setState({
                                    workshop: {
                                        ...this.state.workshop,
                                        documents: event.target.files[0]
                                    }
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Button className="m-2 px-5 py-2" type="submit" disabled={this.state.isUploading}> Update&nbsp;
                            {this.state.isUploading && <Spinner animation={"border"} size={"sm"}/>}</Button>
                        <Button className="m-2 px-5 py-2" onClick={this.handleCancel}> Cancel </Button>
                    </Form>
                </Card>
            </React.Fragment>
        )
    }

}