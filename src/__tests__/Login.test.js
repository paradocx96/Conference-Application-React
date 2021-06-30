import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Login from "../components/Login/Login";

describe("Login test cases!", () => {

    test("Login Renders without crashing!", () => {
        render(<Login/>);
    });

    test("Login component should have following texts!", () => {
        render(<Login/>);

        expect(screen.getByText('Sign In')).toBeInTheDocument();
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Remember me')).toBeInTheDocument();
    });

})