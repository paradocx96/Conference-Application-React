import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import ViewKeyNoteSection from "../components/KeyNotes/ViewKeyNoteSection";

test("ViewKeyNoteSection Renders without crashing!", () => {
    render(<ViewKeyNoteSection/>);
});

test("ViewKeyNoteSection Renders without crashing and Texts matched!", () => {
    render(<ViewKeyNoteSection/>);
    expect(screen.getByText('KEYNOTES')).toBeInTheDocument();
});