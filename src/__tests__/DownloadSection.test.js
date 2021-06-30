import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react';
import DownloadSection from "../components/Download/DownloadSection";

test("DownloadSection Renders without crashing!", () => {
    render(<DownloadSection/>);
});