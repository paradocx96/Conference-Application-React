import React, {Component} from "react";
import {Card, Form, Button, Col} from "react-bootstrap";

export default class CreateWorkshop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowForm: false,
            validated: false
        }
    };

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
                        <h3>Create new workshop</h3>
                        <Form noValidate validated={this.validated}>

                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Workshop title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Workshop title"
                                    title="Add the workshop title here"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Course code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Course code"
                                    title="Add the course code if has. Not necessary"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Venue</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Venue"
                                    title="Add the workshop will conducting place."
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Row>

                                <Form.Group as={Col} xs={12} md={6} controlId="validationCustom02">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Date"
                                        title="Add the workshop conducting date"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={6} md={3} controlId="validationCustom02">
                                    <Form.Label>Start</Form.Label>
                                    <Form.Control
                                        required
                                        type="time"
                                        placeholder="start at"
                                        title="Add the workshop starting time"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} xs={12} sm={6} md={3} controlId="validationCustom02">
                                    <Form.Label>End</Form.Label>
                                    <Form.Control
                                        type="time"
                                        placeholder="end at"
                                        title="Add the workshop approximate ending time. Not required."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>

                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Description"
                                    title="Add brief description about the workshop"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Documents and materials</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Documents and materials"
                                    title="pre-giving workshop materials and documents"
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