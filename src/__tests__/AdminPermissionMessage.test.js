import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import AdminPermissionMessage from "../components/Permission/AdminPermissionMessage";

test("AdminPermissionMessage Renders without crashing!", () => {
    render(<AdminPermissionMessage/>);
});

test("AdminPermissionMessage Renders without crashing and Texts matched!", () => {
    render(<AdminPermissionMessage/>);
    expect(screen.getByText('No Permission')).toBeInTheDocument();
    expect(screen.getByText('Administrator Permission Required!')).toBeInTheDocument();
    expect(screen.getByText('You currently do not have permission to view this resources. Please login with proper permissions.')).toBeInTheDocument();
    expect(screen.getByText('If you think this is an error please contact the Administrator.')).toBeInTheDocument();
});