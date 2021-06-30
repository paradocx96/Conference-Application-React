import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import Registration from "../components/Registration/Registration";

describe("Registration test cases!", () => {

  test("Registration Renders without crashing!", () => {
    render(<Registration/>);
  });

  test("Registration component should have following texts!", () => {
    render(<Registration/>);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Contact Number')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Re-enter Password')).toBeInTheDocument();
  });

})