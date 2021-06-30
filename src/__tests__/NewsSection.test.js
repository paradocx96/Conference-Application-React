import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import NewsSection from "../components/News/NewsSection";

test("NewsSection Renders without crashing!", () => {
    render(<NewsSection/>);
});

test("NewsSection Renders without crashing and Texts matched!", () => {
    render(<NewsSection/>);
    expect(screen.getByText('NEWS')).toBeInTheDocument();
});