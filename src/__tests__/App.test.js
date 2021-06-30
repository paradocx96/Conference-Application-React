import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import App from "../../App";

test("App Renders without crashing! and Text matched!", () => {
    render(<App/>);
    // console.log(prettyDOM());
    expect(screen.getByText('ICAF - 2021')).toBeInTheDocument();
    expect(screen.getByText('International Conference on Application Frameworks - 2021')).toBeInTheDocument();
    expect(screen.getByText('Sri Lanka Institute of Information Technology')).toBeInTheDocument();
});