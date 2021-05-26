import React, {Component} from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import {IoMdCloseCircleOutline} from "react-icons/io";
import {createWorkshop} from "../../services/WorkshopService";

export default class CreateWorkshop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowForm: false,
            isValidated: false,
            workshop: {
                title: '',
                courseCode: '',
                venue: '',
                date: '',
                startingTime: '',
                endTime: '',
                description: '',
                documents: null
            }
        }
    };

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

        /**
         * call to create new workshop axios function.
         */
        await createWorkshop(this.state.workshop);

        this.setState({isValidated: false});

    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.state.isShowForm &&
                    <Card style={{cursor: 'pointer'}} className="m-2 py-2 px-4"
                          onClick={() => this.setState({isShowForm: true})}>
                        Create Workshop
                    </Card>
                }
                {
                    this.state.isShowForm &&
                    <Card className="mx-2 my-5 p-4">
                        <h3>Create new workshop
                            <IoMdCloseCircleOutline style={{cursor: 'pointer'}} className="float-right"
                                                    onClick={() => this.setState({isShowForm: false})}/>
                        </h3>
                        <Form noValidate validated={this.state.isValidated} onSubmit={this.handleSubmit}>

                            <Form.Group controlId="validationTitle">
                                <Form.Label>Workshop title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Workshop title"
                                    title="Add the workshop title here"
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

                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Card>
                }


            </React.Fragment>
        )
    }

}