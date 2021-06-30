import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Homepage from "../pages/Homepage";

test("Homepage Renders without crashing!", () => {
    render(<Homepage/>);
});