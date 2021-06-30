import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import NewsSection from "../components/News/NewsSection";

test("NewsSection Renders without crashing!", () => {
    render(<NewsSection/>);
});