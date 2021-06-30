import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Homepage from "../pages/Homepage";

test("Homepage Renders without crashing!", () => {
    render(<Homepage/>);
});

test("Homepage rendered without crashing and Texts matched!", () => {
    render(<Homepage/>);
    expect(screen.getByText('International Conference on Application Frameworks - 2021')).toBeInTheDocument();
    expect(screen.getByText('Sri Lanka Institute of Information Technology')).toBeInTheDocument();
    expect(screen.getByText('ABOUT ICAF 2021')).toBeInTheDocument();
    expect(screen.getByText('KEY NOTE SPEAKERS')).toBeInTheDocument();
    expect(screen.getByText('LATEST NEWS')).toBeInTheDocument();
    expect(screen.getByText('GALLERY')).toBeInTheDocument();
    expect(screen.getByText('CONFERENCE TRACKS')).toBeInTheDocument();
    expect(screen.getByText('IMPORTANT DATES')).toBeInTheDocument();
    expect(screen.getByText('ORGANISED BY')).toBeInTheDocument();
    expect(screen.getByText('SPONSORED BY')).toBeInTheDocument();
});