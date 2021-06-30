import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Contact from "../components/Homepage/Contact";

test("Contact Renders without crashing!", () => {
    render(<Contact/>);
});

test("Contact Renders without crashing and Texts matched!", () => {
    render(<Contact/>);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Telephone')).toBeInTheDocument();
    expect(screen.getByText('Fax')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
});