import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import AdminPermissionMessage from "../components/Permission/AdminPermissionMessage";

test("AdminPermissionMessage Renders without crashing!", () => {
    render(<AdminPermissionMessage/>);
});