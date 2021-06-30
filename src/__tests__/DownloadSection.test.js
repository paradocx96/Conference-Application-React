import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import DownloadSection from "../components/Download/DownloadSection";

test("DownloadSection Renders without crashing!", () => {
    render(<DownloadSection/>);
});

test("DownloadSection Renders without crashing and Texts matched!", () => {
    render(<DownloadSection/>);
    expect(screen.getByText('Download Items Section')).toBeInTheDocument();
    expect(screen.getByText('Here you can download latest templates')).toBeInTheDocument();
});