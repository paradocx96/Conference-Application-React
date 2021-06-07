import React, {Component} from "react";
import {Card} from "react-bootstrap";

export default class WorkshopCommonGuide extends Component {

    render() {
        return (
            <Card className="m-2 p-4">
                <h3>Common Guide line for conducting workshops</h3>
                <ul>
                    <li>Due to COVID 19 situation you should follow health instructions.
                        <ul>
                            <li>
                                When you enter the SLIIT campus you should need support to check your body temperature.
                            </li>
                            <li>Clean your hands before you put your mask on, as well as before and after you take it
                                off, and after you touch it at any time.
                            </li>
                            <li>We highly encourage don't remove your face mask.</li>
                            <li>Make sure your mask covers both your nose, mouth and chin.</li>
                            <li>Don't share and hard copies of note for students. You can share it as a soft-copy on
                                scheduling a workshop.
                            </li>
                            <li>If you need a hard copy of the note to conduct the workshop please send a mail, then
                                will arrange hard copies from our photocopy centre.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Technology workshops at SLIIT provide an international standard study environment. We can
                        arrange lab for the workshop if needed. Please drop an email requesting lab facilities for
                        workshop.
                    </li>
                    <li>
                        Additional workshops assist SLIIT postgraduate students to improve their skills in research.
                        Those can only conduct on weekend days.
                    </li>
                    <li>
                        Apart from course-specific technical workshops by industry partners, Career Readiness sessions
                        and workshops such as CV writing, Interview facing, Office Etiquette are also conducted by the
                        Unit. Those can conduct on evening times after lectures.
                    </li>

                    <li>
                        SLIIT will normally assign 2-5 clerks to distribute documents. If you need extra clerks please
                        drop an email. We can assign more clerks if you need.
                    </li>

                </ul>
                <storng>
                    Please do not hesitate to contact us if you have any questions or concerns.
                </storng>
            </Card>
        )
    }
}