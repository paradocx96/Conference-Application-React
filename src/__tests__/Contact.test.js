import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Contact from "../components/Homepage/Contact";

test("Contact Renders without crashing!", () => {
    render(<Contact/>);
});